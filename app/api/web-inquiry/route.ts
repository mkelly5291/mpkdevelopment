import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const INQUIRY_RECIPIENT = 'mkelly5291@gmail.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot field: real visitors never see or fill this in, bots usually do
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim().replace(/[\r\n]+/g, ' ') : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length > 100) {
    return Response.json({ error: 'Please enter your name.' }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (phone.replace(/\D/g, '').length < 7 || phone.length > 30) {
    return Response.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return Response.json({ error: 'Please tell me a little about what you are looking for.' }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error('web-inquiry: GMAIL_USER or GMAIL_APP_PASSWORD is not set');
    return Response.json({ error: 'The form is not set up yet. Please call or email instead.' }, { status: 500 });
  }

  const submittedAt = new Date();
  const timestamp = submittedAt.toLocaleString('en-US', { timeZone: 'America/New_York' });
  const safeName = name.replace(/[\r\n]+/g, ' ');

  const fileContents = [
    'MPK DEVELOPMENT - WEB DEVELOPMENT INQUIRY',
    '=========================================',
    '',
    `Submitted: ${timestamp} (Eastern)`,
    `Name:      ${safeName}`,
    `Email:     ${email}`,
    `Phone:     ${phone}`,
    '',
    'What they are looking for:',
    '--------------------------',
    message,
    '',
  ].join('\r\n');

  const fileSlug = safeName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'inquiry';
  const fileDate = submittedAt.toISOString().slice(0, 10);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"MPK Development Website" <${user}>`,
      to: INQUIRY_RECIPIENT,
      replyTo: email,
      subject: `New Web Development Inquiry from ${safeName}`,
      text: `You have a new inquiry from your website. Full details are attached.\r\n\r\n${fileContents}`,
      attachments: [
        {
          filename: `inquiry-${fileSlug}-${fileDate}.txt`,
          content: fileContents,
          contentType: 'text/plain; charset=utf-8',
        },
      ],
    });
  } catch (error) {
    console.error('web-inquiry: failed to send email', error);
    return Response.json({ error: 'Something went wrong sending your message. Please call or email instead.' }, { status: 500 });
  }

  return Response.json({ ok: true });
}
