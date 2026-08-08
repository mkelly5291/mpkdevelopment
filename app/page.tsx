import InteractiveBackground from './components/InteractiveBackground';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Interactive particle background */}
      <InteractiveBackground />
      
      {/* Content layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">

        {/* Hero Section - Name + Photo side by side */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          
          {/* Left: Text */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                Maxwell Kelly
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold text-gray-100 mb-6">
              Software Engineer & Game Developer
            </h2>

            {/* Education highlight */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <h3 className="text-xl font-semibold text-blue-300">Full Sail University</h3>
              </div>
              <p className="text-gray-300">
                Bachelor of Science in Computer Science<br />
                <span className="text-blue-400 font-medium">Concentration: Game Development</span>
              </p>
            </div>
          </div>

          {/* Right: Headshot */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110"></div>
              
              {/* Photo */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/30">
                <Image
                  src="/MaxKellyHeadshot.jpg"
                  alt="Maxwell Kelly"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 scale-110"></div>
            </div>
          </div>
        </div>

        {/* Main description */}
        <div className="space-y-4 mb-10 text-lg">
          <p className="text-gray-300 leading-relaxed">
            Computer Science graduate from Full Sail University with a concentration in Game Development. 
            I specialize in real-time systems, distributed architecture, and performance-critical applications 
            across backend engineering and interactive experiences.
          </p>
          <p className="text-gray-400 leading-relaxed">
            From multithreaded TCP servers and AI-powered voice systems to rendering pipelines and 
            distributed game architecture, I focus on clean code, modularity, and systems that scale 
            under real-world conditions.
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Core Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {['C++', 'Python', 'Java', 'C#', 'JavaScript', 'Git', 'REST APIs', 'Socket Programming', 'Multithreading'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-sm font-medium hover:border-blue-500 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <a 
            href="/projects" 
            className="group relative bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10">My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a 
            href="/contact" 
            className="border-2 border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-lg backdrop-blur-sm"
          >
            Get in Touch
          </a>
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