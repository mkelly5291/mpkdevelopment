'use client';

import Link from 'next/link';

export default function GameDevelopment() {
  const skills = [
    {
      title: 'Player Mechanics',
      description: 'Character controllers, input systems, movement, and player interaction design.',
      icon: '🎮',
      href: '/projects/game-development/player-mechanics',
    },
    {
      title: 'Level Design',
      description: 'World building, environment layout, pacing, and spatial storytelling.',
      icon: '🗺️',
      href: '/projects/game-development/level-design',
    },
    {
      title: 'Game Mechanics & Components',
      description: 'Core gameplay systems, rules, win/lose conditions, and interactive components.',
      icon: '⚙️',
      href: '/projects/game-development/game-mechanics',
    },
    {
      title: 'State Machines & Game Flow',
      description: 'Game state management, scene transitions, UI flow, and event-driven logic.',
      icon: '🔄',
      href: '/projects/game-development/state-machines',
    },
    {
      title: 'UI/UX & HUD Systems',
      description: 'In-game interfaces, heads-up displays, menus, and player feedback systems.',
      icon: '🖥️',
      href: '/projects/game-development/ui-ux',
    },
    {
      title: 'Performance Optimization',
      description: 'Frame timing, memory management, profiling, and real-time execution efficiency.',
      icon: '📈',
      href: '/projects/game-development/performance',
    },
    {
      title: '3D Modeling & Blender',
      description: 'Asset creation, mesh modeling, UV unwrapping, and game-ready 3D asset pipelines.',
      icon: '🎨',
      href: '/projects/game-development/blender',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(147, 51, 234, 0.03) 1px, transparent 1px)`,
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
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">
            {'// 02 — Game Development'}
          </p>
          <h1 className="text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Game
            </span>
            <br />
            <span className="text-white">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            From player mechanics and level design to 3D modeling and performance optimization
            explore the different disciplines that go into building polished,
            engaging game experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-8">
            {'// Select a Skill Area'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => (
              <Link key={i} href={skill.href}>
                <div className="group relative bg-gray-900/50 border border-purple-500/10 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:bg-purple-950/20 cursor-pointer h-full">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-bl-2xl rounded-tr-2xl group-hover:bg-purple-500/10 transition-all duration-300"></div>
                  <p className="text-xs font-mono text-purple-500/50 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="text-3xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors mt-auto">
                    <span className="text-sm font-semibold">Explore</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Published Work Section */}
        <div className="mb-20">
          <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-8">
            {'// Published Work'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Maze Shift */}
            <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Maze Shift</h3>
                  <p className="text-purple-400 font-mono text-xs">C++ • Unity • WebGL</p>
                </div>
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-mono">
                  Published
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A performance-critical real-time puzzle game featuring dynamic maze generation,
                state machine architecture, and optimized execution paths. Published on Newgrounds.
              </p>
              
             <a href="https://www.newgrounds.com/portal/view/957609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play on Newgrounds
              </a>
            </div>

            {/* Somnium */}
            <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Somnium</h3>
                  <p className="text-purple-400 font-mono text-xs">Five Forge Studios</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-mono">
                  In Development
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                An original game currently in active development at Five Forge Studios.
                Contributing to level design, game mechanics, and overall systems architecture
                as part of a collaborative development team.
              </p>
              
                <a href="https://fiveforgestudios.itch.io/somnium"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Download on Itch.io
              </a>
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
              Built from scratch with <span className="text-purple-400 font-semibold">Next.js</span>,
              <span className="text-purple-400 font-semibold"> TypeScript</span>,
              <span className="text-purple-400 font-semibold"> Tailwind CSS</span>, and
              <span className="text-purple-400 font-semibold"> Canvas API</span>
              <span className="text-gray-600"> — Designed & developed by me</span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}