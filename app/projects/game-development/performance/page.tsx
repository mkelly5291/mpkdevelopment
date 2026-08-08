import Link from 'next/link';

export default function Performance() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">
          {'// Performance Optimization'}
        </p>
        <h1 className="text-6xl font-black mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Coming
          </span>
          <br />
          <span className="text-white">Soon</span>
        </h1>
        <p className="text-gray-400 text-xl mb-12">
          This section is currently under construction. Check back soon!
        </p>
        <Link
          href="/projects/game-development"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Game Development
        </Link>
      </div>
    </main>
  );
}