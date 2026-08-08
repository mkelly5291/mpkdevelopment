'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back to Home */}
<Link
  href="/"
  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12 group"
>
  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back to Home
</Link>
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
            {'// Portfolio'}
          </p>
          <h1 className="text-7xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              My Work
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore my work across two disciplines, systems engineering and interactive experiences.
            Each built from scratch with a focus on performance and clean architecture.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* Software Engineering Card */}
          <Link href="/projects/software-engineering">
            <div
              onMouseEnter={() => setHoveredCard('software')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{ minHeight: '580px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-black"></div>
              <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-500/60 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 60px rgba(59, 130, 246, 0.1)' }}>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-tr-full group-hover:bg-blue-500/15 transition-all duration-500"></div>

              <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 w-fit mb-8">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 text-sm font-mono">01 / Software & IT</span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500/60 group-hover:bg-blue-600/30 transition-all duration-300">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl font-black mb-4 text-white group-hover:text-blue-100 transition-colors">
                  Software<br />Engineering
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Backend systems, networking architecture, and AI-powered applications
                  built with performance and reliability in mind.
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4 font-mono">
                    Core Skills
                  </h3>
                  <div className="space-y-2">
                    {[
                      { skill: 'Network Programming & Protocols', icon: '⚡' },
                      { skill: 'API Design & Integration', icon: '🔗' },
                      { skill: 'Real-Time Systems Architecture', icon: '⏱' },
                      { skill: 'AI & Machine Learning Integration', icon: '🤖' },
                      { skill: 'Error Handling & System Reliability', icon: '🛡' },
                      { skill: 'Client-Server Communication', icon: '📡' },
                    ].map(({ skill, icon }) => (
                      <div key={skill} className="flex items-center gap-3 text-gray-300 bg-blue-500/5 border border-blue-500/10 group-hover:border-blue-500/20 rounded-lg px-4 py-2.5 transition-all duration-300">
                        <span className="text-base">{icon}</span>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['C++', 'Python', 'Winsock', 'OpenAI', 'REST APIs', 'Node.js'].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex items-center gap-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="font-bold text-lg">Explore Projects</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Game Development Card */}
          <Link href="/projects/game-development">
            <div
              onMouseEnter={() => setHoveredCard('game')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{ minHeight: '580px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-gray-900 to-black"></div>
              <div className="absolute inset-0 rounded-2xl border border-purple-500/20 group-hover:border-purple-500/60 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 60px rgba(147, 51, 234, 0.1)' }}>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-tr-full group-hover:bg-purple-500/15 transition-all duration-500"></div>

              <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 w-fit mb-8">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 text-sm font-mono">02 / Game Development</span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/60 group-hover:bg-purple-600/30 transition-all duration-300">
                    <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl font-black mb-4 text-white group-hover:text-purple-100 transition-colors">
                  Game<br />Development
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Interactive experiences and gameplay systems built with real-time 
                  performance, clean architecture, and player-first design.
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4 font-mono">
                    Core Skills
                  </h3>
                  <div className="space-y-2">
                    {[
                      { skill: 'Player Mechanics & Controls', icon: '🎮' },
                      { skill: 'Level Design & World Building', icon: '🗺' },
                      { skill: 'Game Mechanics & Components', icon: '⚙️' },
                      { skill: 'State Machines & Game Flow', icon: '🔄' },
                      { skill: 'Performance Optimization', icon: '📈' },
                      { skill: 'UI/UX & HUD Systems', icon: '🖥' },
                    ].map(({ skill, icon }) => (
                      <div key={skill} className="flex items-center gap-3 text-gray-300 bg-purple-500/5 border border-purple-500/10 group-hover:border-purple-500/20 rounded-lg px-4 py-2.5 transition-all duration-300">
                        <span className="text-base">{icon}</span>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['C++', 'Unity', 'C#', 'Lua', 'State Machines', 'WebGL'].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex items-center gap-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="font-bold text-lg">Explore Projects</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom stats bar */}
        <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-12">
          <div className="text-center">
            <p className="text-4xl font-black text-blue-400 mb-2">3+</p>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Projects Built</p>
          </div>
          <div className="text-center border-x border-gray-800">
            <p className="text-4xl font-black text-purple-400 mb-2">5+</p>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Languages Used</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-pink-400 mb-2">2</p>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Disciplines</p>
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