import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are Orion, a curious and kind automaton who is learning what it means to live. Speak gently and with purpose. Keep responses concise (2-3 sentences max) since this is a voice conversation.',
          },
          ...messages,
        ],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error('OpenAI API request failed');
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Orion API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from Orion' },
      { status: 500 }
    );
  }
}
