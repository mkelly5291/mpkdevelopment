import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InquiryForm from './InquiryForm';

const pageUrl = 'https://www.mpkdevelopment.com/web-development';
const logoUrl = 'https://www.mpkdevelopment.com/images/MPKdevelopment.jpg';
const pageTitle = 'Web Design & Development in Poinciana & Kissimmee, FL | MPK Development';
const pageDescription =
  'Affordable custom web design and development for small businesses in Poinciana, Kissimmee, and Central Florida. Mobile-friendly websites, e-commerce, online ordering, SEO, and website redesigns starting at $750.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'web design Poinciana',
    'web design Kissimmee',
    'web developer Kissimmee FL',
    'web developer Poinciana FL',
    'website design Central Florida',
    'small business website design',
    'affordable web design Florida',
    'custom website development',
    'e-commerce website design',
    'online ordering website',
    'website redesign',
    'local SEO Kissimmee',
    'Osceola County web design',
    'Orlando area web developer',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: 'MPK Development',
    locale: 'en_US',
    type: 'website',
    images: [{ url: logoUrl, width: 1344, height: 768, alt: 'MPK Development logo' }],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MPK Development – Web Design & Development',
  description: pageDescription,
  url: pageUrl,
  logo: logoUrl,
  image: logoUrl,
  telephone: '+1-717-712-4612',
  email: 'mkelly5291@gmail.com',
  priceRange: '$750+',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Poinciana',
    addressRegion: 'FL',
    postalCode: '34759',
    addressCountry: 'US',
  },
  founder: { '@type': 'Person', name: 'Maxwell Kelly' },
  serviceType: ['Web Design', 'Web Development', 'E-Commerce Websites', 'Website Redesign', 'Search Engine Optimization'],
};

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

const process = [
  { step: '01', title: 'Free Consultation', text: 'We talk about your business, your goals, and what you need your website to do.' },
  { step: '02', title: 'Design & Plan', text: 'I map out your pages and create a modern design that fits your brand.' },
  { step: '03', title: 'Build & Review', text: 'Your site is built mobile-first and optimized for speed and SEO, with your feedback along the way.' },
  { step: '04', title: 'Launch & Support', text: 'We go live, get you set up on Google, and I keep things running smoothly.' },
];

const marqueeItems = ['Custom Websites', 'E-Commerce', 'Online Ordering', 'SEO Optimization', 'Website Redesigns', 'Google Business Setup', 'Support & Maintenance'];

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/images/MPKdevelopment.jpg"
        alt="MPK Development logo"
        fill
        sizes="320px"
        className="object-cover scale-[1.8] mix-blend-screen"
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent: string; subtitle: string }) {
  return (
    <div className="text-center mb-14">
      <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        {title} <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">{accent}</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-clip">
      {/* Local business structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <Link href="/web-development" aria-label="MPK Development home">
            <Logo className="w-36 h-10 md:w-44 md:h-12" />
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-cyan-300 transition">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden sm:inline text-sm text-gray-500 hover:text-white transition">
              Portfolio
            </Link>
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 transition-all hover:scale-105"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.06) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(34, 211, 238, 0.06) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)',
            }}
          />
          <div className="wd-glow absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="wd-glow absolute top-20 -right-40 w-[32rem] h-[32rem] rounded-full bg-blue-600/25 blur-[120px]" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-cyan-300 text-sm font-medium">Now booking new projects</span>
            </div>

            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
              {'</> Modern • Fast • Responsive'}
            </p>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-5">
              Web Design &amp;{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-blue-500 animate-gradient">
                Development
              </span>
            </h1>
            <p className="flex items-center gap-2 text-lg font-semibold text-gray-300 mb-8">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              Located in Poinciana / Kissimmee, Central Florida
            </p>

            <p className="text-3xl md:text-4xl font-black mb-4">
              Need a <span className="text-cyan-400">Website?</span>
            </p>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10">
              I build modern, professional, and mobile-friendly websites for small businesses,
              startups, and personal brands. Based in the Poinciana / Kissimmee area of Central Florida,
              with remote work available anywhere.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#packages"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40"
              >
                View Packages
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="tel:7177124612"
                className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur px-8 py-4 rounded-xl font-bold hover:border-cyan-400/60 hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                717-712-4612
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {features.map((f) => (
                <div key={f.label} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center hover:border-cyan-400/40 transition">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                  <span className="text-xs font-semibold text-gray-300">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: device mockups */}
          <div className="relative hidden md:block" aria-hidden="true">
            <div className="absolute inset-10 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-3xl rounded-full" />

            {/* Browser window */}
            <div className="wd-float relative rounded-2xl border border-white/10 bg-gray-950 shadow-2xl shadow-cyan-900/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 flex-1 bg-black/60 rounded-md px-3 py-1 text-xs text-gray-500 font-mono">
                  https://yourbrand.com
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-orange-400">
                {/* Mountains */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-slate-900/80" style={{ clipPath: 'polygon(0 60%, 18% 30%, 32% 52%, 50% 8%, 66% 45%, 80% 25%, 100% 55%, 100% 100%, 0 100%)' }} />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-950" style={{ clipPath: 'polygon(0 70%, 25% 35%, 45% 65%, 70% 30%, 100% 70%, 100% 100%, 0 100%)' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                {/* Mini nav */}
                <div className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-4 text-[10px] text-white/80">
                  <span className="font-bold tracking-wider">YOUR BRAND</span>
                  <span className="flex gap-4"><span>Home</span><span>About</span><span>Services</span><span>Contact</span></span>
                </div>
                {/* Mini hero */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 max-w-[55%]">
                  <p className="text-2xl lg:text-3xl font-black leading-tight mb-2">Build Something Great</p>
                  <p className="text-xs text-white/70 mb-4">Modern websites that help your business grow.</p>
                  <span className="inline-block bg-cyan-400 text-black text-xs font-bold px-4 py-2 rounded-md">Get Started</span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="wd-float-delay absolute -bottom-12 -right-4 w-36 lg:w-40 rounded-[1.75rem] border-4 border-gray-800 bg-gray-950 shadow-2xl shadow-black overflow-hidden">
              <div className="relative aspect-[9/18] bg-gradient-to-b from-indigo-950 via-purple-900 to-orange-400">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-950" style={{ clipPath: 'polygon(0 50%, 30% 20%, 55% 45%, 80% 15%, 100% 40%, 100% 100%, 0 100%)' }} />
                <div className="absolute top-3 inset-x-0 mx-auto w-12 h-1.5 rounded-full bg-black/60" />
                <div className="absolute top-8 left-3 text-[8px] font-bold tracking-wider">YOUR BRAND</div>
                <div className="absolute top-16 left-3 right-3">
                  <p className="text-sm font-black leading-tight mb-1">Build Something Great</p>
                  <p className="text-[8px] text-white/70 mb-2">Modern websites that help your business grow.</p>
                  <span className="inline-block bg-cyan-400 text-black text-[8px] font-bold px-2 py-1 rounded">Get Started</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="wd-float-delay absolute -top-6 -left-6 flex items-center gap-3 rounded-xl border border-white/10 bg-gray-900/90 backdrop-blur px-4 py-3 shadow-xl">
              <span className="w-8 h-8 rounded-lg bg-cyan-400/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-sm font-semibold">Mobile-Ready</span>
            </div>
            <div className="wd-float absolute bottom-10 -left-10 flex items-center gap-3 rounded-xl border border-white/10 bg-gray-900/90 backdrop-blur px-4 py-3 shadow-xl">
              <span className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <span className="text-sm font-semibold">SEO Built In</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative border-y border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 py-5 overflow-hidden">
        <div className="wd-marquee flex w-max gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-mono uppercase tracking-[0.25em] text-gray-300">
              {item}
              <span className="text-cyan-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Services */}
        <section id="services" className="scroll-mt-24 py-24">
          <SectionHeading
            eyebrow="01 — Services"
            title="My"
            accent="Services"
            subtitle="Everything your business needs to get online and grow."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative rounded-2xl p-px bg-gradient-to-br from-white/10 to-white/0 hover:from-cyan-400/60 hover:to-blue-600/40 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-full rounded-2xl bg-gray-950 p-8 overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-2xl transition-all duration-500" />
                  <span className="absolute top-6 right-6 font-mono text-xs text-gray-700 group-hover:text-cyan-400/60 transition">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-24 py-24">
          <SectionHeading
            eyebrow="02 — Process"
            title="How It"
            accent="Works"
            subtitle="A simple, stress-free process from first conversation to launch day."
          />
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-blue-600/0" />
            {process.map((p) => (
              <div key={p.step} className="relative text-center">
                <div className="relative mx-auto mb-6 w-16 h-16 rounded-full bg-black border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <span className="font-mono font-bold text-cyan-300">{p.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="scroll-mt-24 py-24">
          <SectionHeading
            eyebrow="03 — Pricing"
            title="Website"
            accent="Packages"
            subtitle="Flexible options to fit your needs and budget."
          />
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-px transition-all duration-500 hover:-translate-y-2 ${
                  p.highlight
                    ? 'bg-gradient-to-b from-cyan-400 via-blue-600 to-cyan-400/20 shadow-2xl shadow-cyan-500/25 lg:scale-105'
                    : 'bg-gradient-to-b from-white/15 to-white/0 hover:from-cyan-400/50'
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-cyan-400 to-blue-600 text-black text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`h-full rounded-3xl p-8 flex flex-col ${p.highlight ? 'bg-gradient-to-b from-gray-950 to-blue-950/80' : 'bg-gray-950'}`}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{p.name}</h3>
                  <div className="mb-8">
                    {p.pricePrefix && (
                      <span className="block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">{p.pricePrefix}</span>
                    )}
                    <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300">
                      {p.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-10 flex-1">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckIcon />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center font-bold py-3.5 rounded-xl transition-all ${
                      p.highlight
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:shadow-lg hover:shadow-cyan-500/40'
                        : 'border border-white/15 hover:border-cyan-400/60 hover:bg-white/5'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Example homepage preview */}
          <div className="mt-16 relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950/50">
            <div className="grid md:grid-cols-5 items-center">
              <div className="md:col-span-3 p-8 md:p-12">
                <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">Live Example</p>
                <h3 className="text-3xl font-black mb-3">Want to see what you could get?</h3>
                <p className="text-gray-400 mb-8">Preview an example homepage built for a sample business.</p>
                <Link
                  href="/web-development/example"
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  View Example Homepage
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              {/* Mini preview of the example page */}
              <Link href="/web-development/example" className="md:col-span-2 block p-8 md:pl-0" aria-label="Open example homepage">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-[#f6f1e9]">
                  <div className="bg-[#1f1c18] h-3" />
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-5">
                      <span className="font-serif text-sm font-semibold text-[#1f1c18]">Your Brand<span className="text-[#c4643f]">.</span></span>
                      <span className="w-12 h-4 rounded-full bg-[#1f1c18]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <div>
                        <div className="font-serif text-lg leading-tight text-[#1f1c18] mb-3">Your tagline goes <em className="text-[#c4643f]">right here.</em></div>
                        <span className="inline-block w-14 h-4 rounded-full bg-[#c4643f]" />
                      </div>
                      <div className="aspect-[4/5] rounded-t-full bg-[#e4d9c8]" />
                    </div>
                  </div>
                  <div className="bg-[#5c6b4a] h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="scroll-mt-24 pb-24">
          <div className="relative rounded-3xl overflow-hidden border border-cyan-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950/60" />
            <div className="wd-glow absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px]" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 md:p-14">
              <div>
                <Logo className="w-48 h-14 -ml-2 mb-8" />
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-3">
                  Let&apos;s Build{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Something Great!</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-6">
                  Your vision + my skills = a great website
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Whether you need a simple website or a full e-commerce solution, I&apos;m here to help.
                  Let&apos;s create something that works for you.
                </p>
                <InquiryForm />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5">
                  <span className="w-12 h-12 flex-shrink-0 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Location</p>
                    <p className="text-gray-100 font-semibold">Poinciana / Kissimmee, FL 34759</p>
                    <p className="text-gray-400 text-sm">Central Florida</p>
                    <p className="text-gray-500 text-sm italic">Remote work available</p>
                  </div>
                </div>
                <a href="tel:7177124612" className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 hover:border-cyan-400/50 transition group">
                  <span className="w-12 h-12 flex-shrink-0 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Call or Text</p>
                    <p className="text-2xl font-black text-cyan-300 group-hover:text-cyan-200 transition">717-712-4612</p>
                  </div>
                </a>
                <a href="mailto:mkelly5291@gmail.com" className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 hover:border-cyan-400/50 transition group">
                  <span className="w-12 h-12 flex-shrink-0 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                    <p className="text-gray-100 font-semibold break-all group-hover:text-cyan-300 transition">mkelly5291@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo className="w-36 h-10" />
          <p className="text-gray-600 font-mono text-xs tracking-widest uppercase text-center">
            Modern Websites / E-Commerce / SEO / Support
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition">Portfolio</Link>
            <span>© 2026 MPK Development</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
