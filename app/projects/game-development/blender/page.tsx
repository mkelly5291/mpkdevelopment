import Link from 'next/link';
import Image from 'next/image';

export default function Blender() {
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
          href="/projects/game-development"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Game Development
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">
            {'// 3D Modeling & Blender'}
          </p>
          <h1 className="text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              3D Modeling
            </span>
            <br />
            <span className="text-white">& Blender</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Creating game-ready 3D assets through sculpting, modeling, and UV unwrapping 
            in Blender. From character anatomy to prop design, focused on building 
            assets that meet real production pipelines.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-8">
            {'// Core Skills'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Character Sculpting',
                description: 'Organic sculpting of human anatomy using Dyntopo and multiresolution workflows.',
                icon: '🧍',
              },
              {
                title: 'Reference-Based Modeling',
                description: 'Using orthographic reference sheets to accurately model characters and props to concept art.',
                icon: '📐',
              },
              {
                title: 'Mesh Modeling',
                description: 'Box modeling and polygon modeling techniques for hard surface and organic forms.',
                icon: '🔷',
              },
              {
                title: 'UV Unwrapping',
                description: 'Preparing models for texturing by creating clean, efficient UV layouts.',
                icon: '🗺️',
              },
              {
                title: 'Game-Ready Assets',
                description: 'Optimizing geometry and poly count for real-time rendering in game engines.',
                icon: '🎮',
              },
              {
                title: 'Asset Pipeline',
                description: 'Exporting and preparing assets for import into Unity and Unreal Engine.',
                icon: '⚙️',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 border border-purple-500/10 hover:border-purple-500/40 rounded-xl p-6 transition-all duration-300 hover:bg-purple-950/20 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Character Sculpting Project */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-8">
            {'// Work Showcase'}
          </h2>

          {/* Character Sculpt */}
          <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-8 mb-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Character Sculpt — Personal Project</h3>
                <p className="text-purple-400 font-mono text-sm">Blender • Dyntopo Sculpting • Reference Modeling</p>
              </div>
              <span className="px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-mono">
                In Progress
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              A personal character sculpt created in Blender. Using orthographic reference sheets as a guide, 
  the model was built from a base mesh and sculpted using Dyntopo to achieve accurate human 
  proportions and anatomy. The workflow involved clay strip brushes for muscle definition 
  and surface detail, working from both front and side reference angles simultaneously.
            </p>

            {/* Images */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-4">
                {'// Sculpt Progress'}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group">
                  <Image
                    src="/images/CharacterSculpting1.png"
                    alt="Character Sculpt - Front View with Reference"
                    width={800}
                    height={600}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm text-gray-300 font-mono">Front View — Reference Matching</p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group">
                  <Image
                    src="/images/CharacterSculpting2.png"
                    alt="Character Sculpt - Back View"
                    width={800}
                    height={600}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm text-gray-300 font-mono">Back View — Anatomy Detail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key highlights */}
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Orthographic reference sheets for accurate proportions',
                'Dyntopo sculpting for dynamic topology',
                'Clay strips brush for muscle and surface definition',
                'Front and side angle reference workflow',
                'Human anatomy study applied to game character',
                'Base mesh to full sculpt pipeline',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Straw Hat Video */}
          <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Straw Hat — Prop Model</h3>
                <p className="text-purple-400 font-mono text-sm">Blender • Hard Surface Modeling • Prop Design</p>
              </div>
              <span className="px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
  Published — Roblox Marketplace
</span>
            </div>

           <p className="text-gray-300 leading-relaxed mb-6">
  A straw hat prop modeled in Blender and published to the Roblox marketplace. 
  Demonstrates hard surface modeling techniques with a focus on clean topology, 
  accurate form, and optimized geometry meeting Roblox's asset requirements 
  for real-time use in game experiences.
</p>

            {/* Video */}
            <div className="bg-black/40 rounded-xl p-4 border border-gray-800 mb-6">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">
                {'// Model Showcase'}
              </p>
              <video controls className="w-full rounded-lg">
                <source src="/videos/StrawHat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Key highlights */}
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Hard surface modeling techniques',
                'Clean topology for game engine use',
                'Accurate real-world proportions',
                'Game-ready geometry optimization',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
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