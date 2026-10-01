import Link from 'next/link';

const features = [
  { label: 'Fast Loading', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'Mobile Friendly', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { label: 'SEO Optimized', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { label: 'Secure & Reliable', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
];

const services = [
  {
    title: 'Custom Website Design',
    description: 'Modern, clean, and tailored to your business or personal brand.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Online Ordering / E-Commerce',
    description: 'Sell your products or services online. (Integrated with trusted third-party services)',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Website Redesigns',
    description: 'Give your outdated site a fresh, modern look.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  },
  {
    title: 'Content & Copywriting',
    description: 'Clear, engaging content that connects with your audience.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'SEO Optimization',
    description: 'Help your business get found on Google.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description: 'Keep your site updated, secure, and running smoothly.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
];

const packages = [
  {
    name: 'Basic Website',
    price: '$750+',
    pricePrefix: 'Starting at',
    features: ['Home page', 'About page', 'Services / Menu', 'Location', 'Hours', 'Contact', 'Mobile responsive', 'Basic SEO'],
  },
  {
    name: 'Business Website',
    price: '$1,000 – $1,250',
    highlight: true,
    features: ['Everything in Basic', 'Online ordering integration', 'Customer reviews section', 'Google Maps', 'Contact / order forms', 'Social media integration', 'Google Business setup'],
  },
  {
    name: 'Custom Website / Application',
    price: '$1,500+',
    features: ['Everything in Business', 'Custom ordering system', 'Customer accounts', 'Admin dashboard', 'Online payments', 'Inventory management', 'Order tracking', 'Custom integrations'],
  },
];

export default function WebDevelopment() {
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
        <div className="text-center mb-16">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
            {'</> Modern • Fast • Responsive'}
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Need a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Website?
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            I build modern, professional, and mobile-friendly websites for businesses,
            startups, and personal brands.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
                <span className="text-sm font-medium text-gray-200">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-2">
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-gray-400 mb-8">Everything you need to get online and grow.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/20">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-2">
            Website <span className="text-blue-400">Packages</span>
          </h2>
          <p className="text-gray-400 mb-8">Flexible options to fit your needs and budget.</p>
          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 border transition-all hover:scale-[1.02] ${
                  p.highlight
                    ? 'border-blue-500/70 bg-gradient-to-br from-blue-950/80 to-gray-900/80 shadow-xl shadow-blue-900/30'
                    : 'border-blue-500/30 bg-gray-900/70'
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-8 bg-blue-600 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-sm font-bold uppercase tracking-wide text-gray-300 mb-2">{p.name}</h3>
                <p className="text-3xl font-black text-blue-400 mb-6">
                  {p.pricePrefix && (
                    <span className="block text-sm font-semibold text-gray-400 uppercase tracking-wide">{p.pricePrefix}</span>
                  )}
                  {p.price}
                </p>
                <ul className="space-y-3">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Example homepage preview */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-gray-700 bg-gray-900/60 p-8">
            <div>
              <h3 className="text-2xl font-bold mb-1">Want to see what you could get?</h3>
              <p className="text-gray-400">Preview an example homepage built for a sample business.</p>
            </div>
            <Link
              href="/web-development/example"
              className="inline-flex items-center gap-2 border-2 border-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 group flex-shrink-0"
            >
              View Example Homepage
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/60 via-gray-900/60 to-black/60 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-black mb-2">
                Let&apos;s Build <span className="text-blue-400">Something Great!</span>
              </h2>
              <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-6">
                Your vision + my skills = a great website
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you need a simple website or a full e-commerce solution, I&apos;m here to help.
                Let&apos;s create something that works for you.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
              >
                Get in Touch
              </Link>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Location</p>
                <p className="text-gray-200">Poinciana, FL 34759</p>
                <p className="text-gray-500 text-sm italic">Remote work available</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Call or Text</p>
                <a href="tel:7177124612" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
                  717-712-4612
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Email</p>
                <a href="mailto:mkelly5291@gmail.com" className="text-gray-200 hover:text-blue-400 transition">
                  mkelly5291@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <p className="text-center text-gray-600 font-mono text-xs tracking-widest uppercase mt-16">
          Modern Websites / E-Commerce / SEO / Support
        </p>
      </div>
    </main>
  );
}
