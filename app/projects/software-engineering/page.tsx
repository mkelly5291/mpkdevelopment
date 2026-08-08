import OrionChatbot from '@/app/components/OrionChatbot';
import Link from 'next/link';

export default function SoftwareEngineering() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to My Work
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
            {'// 01 — Software Engineering'}
          </p>
          <h1 className="text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Software
            </span>
            <br />
            <span className="text-white">Engineering</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Focused on building reliable, scalable systems with clean architecture. 
            From low-level network programming to AI-powered voice pipelines 
            I approach every problem with a systems-level mindset.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-20">
          <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-8">
            {'// Core Competencies'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Network Programming',
                description: 'TCP/UDP socket programming, custom binary protocols, and client-server architecture using Winsock API.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                ),
              },
              {
                title: 'API Integration',
                description: 'RESTful API design, third-party service orchestration, and secure key management across distributed systems.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                ),
              },
              {
                title: 'Real-Time Systems',
                description: 'Low-latency execution, event-driven design, and performance-critical application development.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'AI Integration',
                description: 'Connecting applications to large language models and voice synthesis APIs to build intelligent user-facing systems.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Error Handling & Reliability',
                description: 'Structured error handling, retry logic, graceful degradation, and connection lifecycle management.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Systems Architecture',
                description: 'Modular design patterns, separation of concerns, and scalable codebase organization across multiple languages.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 border border-blue-500/10 hover:border-blue-500/40 rounded-xl p-6 transition-all duration-300 hover:bg-blue-950/20 group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform w-fit">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-8">
            {'// Technical Stack'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: 'Languages',
                items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C#'],
              },
              {
                category: 'Networking & Systems',
                items: ['Winsock API', 'TCP/UDP Sockets', 'REST APIs', 'WebSockets', 'HTTP/HTTPS'],
              },
              {
                category: 'Tools & Frameworks',
                items: ['Node.js', 'Next.js', 'React', 'Git', 'Visual Studio', 'VS Code'],
              },
              {
                category: 'APIs & Services',
                items: ['OpenAI GPT-4', 'ElevenLabs', 'Web Speech API', 'RESTful Services'],
              },
            ].map((stack, i) => (
              <div key={i} className="bg-gray-900/50 border border-blue-500/10 rounded-xl p-6">
                <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wide mb-4">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-gray-300 font-mono hover:border-blue-500/50 hover:text-white transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Spotlights */}
        <div className="mb-20">
          <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-8">
            {'// Project Spotlights'}
          </h2>

          {/* TCP Chat Server */}
          <div className="bg-gray-900/50 border border-blue-500/10 rounded-2xl p-8 mb-6 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Multithreaded TCP Chat Server</h3>
                <p className="text-blue-400 font-mono text-sm">C++ • Winsock • Socket Programming • Network Protocols</p>
              </div>
              <span className="px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
                Completed
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              A real-time client-server communication system built from scratch using TCP sockets and the Winsock API. 
              Implements a custom length-prefixed binary messaging protocol for reliable data framing across persistent connections.
            </p>

            {/* Key achievements */}
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                'Custom binary messaging protocol (length-prefix framing)',
                'Loop-based send/receive for guaranteed message delivery',
                'Multi-client session management and connection lifecycle',
                'Graceful error handling and connection teardown',
                'Server/client mode selection at runtime',
                'Non-blocking architecture for concurrent connections',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>

            {/* Code snippet */}
            <div className="bg-black/60 rounded-xl p-5 border border-gray-800 overflow-x-auto mb-6">
              <p className="text-xs text-gray-500 font-mono mb-3 uppercase tracking-wide">
                // Reliable send loop — guarantees full message delivery
              </p>
              <pre className="text-sm text-gray-300 font-mono">
{`int tcp_send_whole(SOCKET skSocket, const char *data, uint16_t length)
{
    int bytesSent = 0;
    while (bytesSent < length)
    {
        int result = send(skSocket, data + bytesSent,
                         length - bytesSent, 0);
        if (result <= 0) return result;
        bytesSent += result;
    }
    return bytesSent;
}`}
              </pre>
            </div>

            {/* Demo video */}
            <div className="bg-black/40 rounded-xl p-4 border border-gray-800">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">// Live Demo</p>
              <video controls className="w-full rounded-lg">
                <source src="/videos/tcp-chat-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Orion */}
          <div className="bg-gray-900/50 border border-blue-500/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Orion — AI Voice Assistant</h3>
                <p className="text-blue-400 font-mono text-sm">Python • OpenAI GPT-4 • Web Speech API • REST APIs</p>
              </div>
              <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-mono">
                Live Demo
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              An end-to-end AI voice pipeline that processes speech input, generates intelligent responses via OpenAI's GPT-4, 
              and delivers audio output through text-to-speech synthesis. Built with a focus on low-latency API orchestration 
              and modular architecture across multiple external services.
            </p>

            {/* Key achievements */}
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                'End-to-end voice pipeline: speech → AI → speech',
                'Low-latency OpenAI GPT-4 API orchestration',
                'Session-based conversation memory management',
                'Structured error handling across external services',
                'Secure API key management via environment variables',
                'Modular architecture for scalability and maintenance',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>

            {/* Features comparison */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/40 rounded-xl p-5 border border-gray-800">
                <h4 className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3">Web Version</h4>
                <ul className="space-y-2">
                  {[
                    'Browser speech recognition',
                    'Native TTS (no API cost)',
                    'Real-time GPT-4 responses',
                    'Session memory',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/40 rounded-xl p-5 border border-gray-800">
                <h4 className="text-purple-400 font-mono text-xs uppercase tracking-wide mb-3">Python Version</h4>
                <ul className="space-y-2">
                  {[
                    'Google Speech Recognition',
                    'ElevenLabs voice synthesis',
                    'Custom voice personality',
                    'Ambient noise adjustment',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Live Orion demo */}
            <div className="bg-black/40 rounded-xl p-4 border border-gray-800">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-4">// Try it yourself</p>
              <OrionChatbot />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Maxwell Kelly. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built from scratch with <span className="text-blue-400 font-semibold">Next.js</span>,
              <span className="text-blue-400 font-semibold"> TypeScript</span>,
              <span className="text-blue-400 font-semibold"> Tailwind CSS</span>, and
              <span className="text-blue-400 font-semibold"> Canvas API</span>
              <span className="text-gray-600"> — Designed & developed by me</span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}