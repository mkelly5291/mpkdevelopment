import OrionChatbot from '@/app/components/OrionChatbot';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        {/* Orion Project Description */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-gray-100">Orion — AI Voice Assistant</h2>
                <p className="text-blue-400 font-semibold mb-4">Python • OpenAI GPT-4 • ElevenLabs • Web Speech API • REST APIs</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A real-time conversational AI chatbot with voice input/output capabilities. Orion features a custom personality system, 
                  conversation memory management, and low-latency API orchestration between multiple services for natural voice interactions.
                </p>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Web Version Features */}
              <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Web Demo Features
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Browser-based speech recognition (Web Speech API)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Native text-to-speech output (no API costs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time OpenAI GPT-4 responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Session-based conversation memory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Interactive chat interface with visual feedback</span>
                  </li>
                </ul>
              </div>

              {/* Original Python Version Features */}
              <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Full Python Version
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Google Speech Recognition for voice input</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ElevenLabs API for premium voice synthesis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom voice personality configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Persistent conversation memory (10-message context)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ambient noise adjustment for reliable capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Error handling with graceful degradation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Technical Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'End-to-end voice pipeline',
                  'Multi-API orchestration',
                  'Low-latency response handling',
                  'Custom AI personality system',
                  'Session memory management',
                  'RESTful backend architecture',
                  'Secure API key management'
                ].map((highlight, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Orion Chatbot */}
        <div className="mb-16">
          <OrionChatbot />
        </div>

        {/* Maze Shift Project Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-gray-100">Maze Shift — Real-Time Systems Project</h2>
                <p className="text-purple-400 font-semibold mb-4">C++ • Unity • State Machines • Performance Optimization • Systems Design</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A performance-critical puzzle game featuring dynamic maze generation, real-time state management, 
                  and optimized execution paths. Built with a focus on maintainable architecture and consistent 
                  frame timing under real-time conditions.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Modular state management architecture',
                  'Real-time collision detection system',
                  'Performance-aware frame timing',
                  'Player input processing & validation',
                  'Win/lose condition logic',
                  'Optimized execution paths for stability'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="mb-6 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Technical Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Real-time systems design',
                  'State machine architecture',
                  'Performance optimization',
                  'Iterative development',
                  'Version control workflows',
                  'System stability engineering'
                ].map((highlight, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300 font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Play Game Section */}
            <div className="bg-black/30 rounded-lg p-8 border border-gray-700 text-center">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Play Maze Shift</h3>
                <p className="text-gray-300 mb-6">
                  Experience the full game on Newgrounds with optimized performance and cross-platform compatibility
                </p>
              </div>

              <a 
                href="https://www.newgrounds.com/portal/view/957609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-purple-500/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play on Newgrounds
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <p className="text-sm text-gray-400 mt-6">
                Use arrow keys to navigate • ESC to pause • Fullscreen available
              </p>
            </div>
          </div>
        </div>

        {/* TCP Chat Server Project Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-600/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-gray-100">Multithreaded TCP Chat Server</h2>
                <p className="text-green-400 font-semibold mb-4">C++ • Winsock • Socket Programming • Network Protocols</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A real-time client-server communication system supporting concurrent connections using TCP sockets. 
                  Features custom length-prefixed messaging protocol, reliable message framing, and multi-client session management.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'TCP socket programming with Winsock API',
                  'Custom length-prefixed message protocol',
                  'Reliable send/receive loop functions',
                  'Multi-message support before disconnect',
                  'Connection state management',
                  'Error handling and graceful shutdown'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="mb-6 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Technical Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Network programming',
                  'Binary protocols',
                  'Client-server architecture',
                  'Socket I/O operations',
                  'Connection lifecycle management',
                  'Message framing & parsing'
                ].map((highlight, i) => (
                  <span key={i} className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-300 font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            <div className="mb-6 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Code Highlight: Reliable Send Function</h3>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700 overflow-x-auto">
                <pre className="text-sm text-gray-300 font-mono">
{`int tcp_send_whole(SOCKET skSocket, const char *data, uint16_t length)
{
    int result;
    int bytesSent = 0;

    while (bytesSent < length)
    {
        result = send(skSocket, (const char *)data + bytesSent, 
                     length - bytesSent, 0);

        if (result <= 0)
            return result;

        bytesSent += result;
    }

    return bytesSent;
}`}
                </pre>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Loop-based sending ensures complete message transmission even when send() returns partial writes
              </p>
            </div>

            {/* Demo Video */}
            <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Live Demo
              </h3>
              
              <div className="relative w-full bg-black rounded-lg overflow-hidden">
                <video 
                  controls 
                  className="w-full"
                >
                  <source src="/videos/tcp-chat-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <p className="text-sm text-gray-400 mt-4 text-center">
                Demonstration of server accepting connections and relaying messages between multiple clients
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">System Architecture</h3>
              <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-center gap-4 text-gray-300 text-sm font-mono flex-wrap">
                  <div className="bg-green-600/20 px-4 py-2 rounded border border-green-500/30">
                    Client A
                  </div>
                  <span>→</span>
                  <div className="bg-green-600/20 px-4 py-2 rounded border border-green-500/30">
                    Client B
                  </div>
                  <span>→</span>
                  <div className="bg-green-500/30 px-6 py-3 rounded border border-green-400 font-bold">
                    TCP Server<br/>
                    <span className="text-xs opacity-75">(Port 31337)</span>
                  </div>
                  <span>→</span>
                  <div className="bg-green-600/20 px-4 py-2 rounded border border-green-500/30">
                    Message Relay
                  </div>
                </div>
                <p className="text-center text-gray-400 text-sm mt-4">
                  Length-prefixed protocol: 1 byte size + N bytes message
                </p>
              </div>
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
              <br className="md:hidden" />
              <span className="text-gray-600"> — Designed & developed by me</span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}