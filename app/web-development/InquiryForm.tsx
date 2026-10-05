'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20';

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/web-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }
      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6 text-center">
        <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-cyan-400/15 flex items-center justify-center">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xl font-bold mb-1">Message sent!</p>
        <p className="text-gray-400 mb-4">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot for bots, hidden from real visitors */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Name
        </label>
        <input id="inquiry-name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Your name" className={inputClass} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Email
          </label>
          <input id="inquiry-email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@example.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inquiry-phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Phone
          </label>
          <input id="inquiry-phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" placeholder="(555) 123-4567" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          What are you looking for?
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Tell me a little about your business and the website you have in mind..."
          className={`${inputClass} resize-y`}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
        {status !== 'sending' && (
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )}
      </button>
    </form>
  );
}
