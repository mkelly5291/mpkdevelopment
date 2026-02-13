import GameOfLifeBackground from '../components/GameOfLifeBackground';

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Game of Life background */}
      <GameOfLifeBackground />

      {/* Content layer */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20" style={{ pointerEvents: 'auto' }}>
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Get in Touch
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Interested in collaboration, opportunities, or just want to connect? 
          Feel free to reach out through any of the channels below.
        </p>

        {/* Contact Cards */}
        <div className="space-y-6">
          {/* Name */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Name</h3>
                <p className="text-xl font-bold text-gray-100">Maxwell Kelly</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</h3>
                <a 
                  href="mailto:mkelly5291@gmail.com" 
                  className="text-xl font-bold text-blue-400 hover:text-blue-300 transition"
                >
                  mkelly5291@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/mkelly5291/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-blue-400 hover:text-blue-300 transition"
                >
                  linkedin.com/in/mkelly5291
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/20">
            <div className="flex items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Phone</h3>
                <a 
                  href="tel:717-712-4612" 
                  className="text-xl font-bold text-blue-400 hover:text-blue-300 transition"
                >
                  (717) 712-4612
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fun note about the background */}
        <div className="mt-12 p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl backdrop-blur-sm">
          <p className="text-sm text-blue-300">
            <span className="font-bold">💡 Pro tip:</span> Move your mouse around to create life! 
            This background is Conway's Game of Life — a cellular automaton where cells live, die, and reproduce based on their neighbors.
          </p>
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