'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Fraunces, DM_Sans } from 'next/font/google';

const serif = Fraunces({ subsets: ['latin'], weight: ['400', '600', '700'], style: ['normal', 'italic'] });
const sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

const navLinks = ['Home', 'About', 'Services', 'Reviews', 'Contact'];

const offerings = [
  { number: '01', title: 'Your Service One', text: 'A short description of what you offer and why customers love it. Keep it simple and inviting.', price: 'From $XX' },
  { number: '02', title: 'Your Service Two', text: 'Highlight what makes this offering unique. Mention quality, speed, or the personal touch you bring.', price: 'From $XX' },
  { number: '03', title: 'Your Service Three', text: 'Describe a signature product or package here. This is a great spot for your best seller.', price: 'From $XX' },
];

const reviews = [
  { quote: 'Your happiest customer’s words go here. Real reviews build real trust with new visitors.', name: 'Customer Name', detail: 'Local Guide' },
  { quote: 'Another glowing review about your friendly service, great results, and attention to detail.', name: 'Customer Name', detail: 'Verified Customer' },
  { quote: 'A short and sweet testimonial that tells people exactly why they should choose you.', name: 'Customer Name', detail: 'Repeat Customer' },
];

const hours = [
  ['Monday – Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '10:00 AM – 4:00 PM'],
  ['Sunday', 'Closed'],
];

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#e4d9c8] ${className}`}>
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#c4643f]/25" />
      <div className="absolute -bottom-16 -left-8 w-56 h-56 rounded-full bg-[#5c6b4a]/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#8a7a66]">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs uppercase tracking-[0.25em]">{label}</span>
      </div>
    </div>
  );
}

export default function ExampleHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${sans.className} min-h-screen bg-[#f6f1e9] text-[#1f1c18]`}>
      {/* Demo banner */}
      <div className="bg-[#1f1c18] text-[#f6f1e9] text-sm">
        <div className="max-w-6xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <span>
            <span className="opacity-60">Example homepage preview by</span> MPK Development
          </span>
          <Link href="/web-development" className="underline underline-offset-4 hover:text-[#e8a07f] transition">
            ← Back to Web Development Services
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-20 bg-[#f6f1e9]/90 backdrop-blur border-b border-[#1f1c18]/10">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className={`${serif.className} text-2xl font-semibold tracking-tight`}>
            Your Brand<span className="text-[#c4643f]">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-[#c4643f] transition">{link}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-block bg-[#1f1c18] text-[#f6f1e9] text-sm px-6 py-3 rounded-full hover:bg-[#c4643f] transition">
            Book Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <ul className="md:hidden px-6 pb-6 space-y-4 text-lg">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c4643f] mb-6">Est. 20XX · Your City, ST</p>
          <h1 className={`${serif.className} text-5xl md:text-7xl leading-[1.05] font-semibold mb-8`}>
            Your tagline goes <em className="font-normal text-[#c4643f]">right here.</em>
          </h1>
          <p className="text-lg text-[#1f1c18]/70 leading-relaxed mb-10 max-w-md">
            A warm, welcoming sentence or two about your business. Tell visitors who you are,
            what you do, and why they&apos;ll love working with you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-[#c4643f] text-white px-8 py-4 rounded-full font-medium hover:bg-[#a8502f] transition">
              Get Started
            </a>
            <a href="#services" className="px-8 py-4 rounded-full font-medium border border-[#1f1c18]/25 hover:border-[#1f1c18] transition">
              Our Services
            </a>
          </div>
        </div>
        <div className="md:col-span-6 relative">
          <ImagePlaceholder label="Your Hero Image" className="aspect-[4/5] rounded-t-full" />
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl px-6 py-5">
            <p className={`${serif.className} text-3xl font-semibold`}>4.9 ★</p>
            <p className="text-xs uppercase tracking-widest text-[#1f1c18]/60">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-[#5c6b4a] text-[#f6f1e9] py-5 overflow-hidden">
        <div className={`${serif.className} max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xl italic`}>
          <span>Locally Owned</span><span className="opacity-50">✦</span>
          <span>Quality First</span><span className="opacity-50">✦</span>
          <span>Friendly Service</span><span className="opacity-50">✦</span>
          <span>Satisfaction Guaranteed</span>
        </div>
      </div>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <ImagePlaceholder label="Photo" className="aspect-square rounded-3xl" />
          <ImagePlaceholder label="Photo" className="aspect-square rounded-3xl mt-12" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#c4643f] mb-4">About Us</p>
          <h2 className={`${serif.className} text-4xl md:text-5xl font-semibold leading-tight mb-6`}>
            The story behind your brand.
          </h2>
          <p className="text-[#1f1c18]/70 leading-relaxed mb-6">
            Share how your business started, what drives you, and the values you bring to every
            customer. People connect with stories — this is your chance to tell yours.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1f1c18]/15">
            {[['10+', 'Years'], ['500+', 'Clients'], ['100%', 'Passion']].map(([num, label]) => (
              <div key={label}>
                <p className={`${serif.className} text-3xl font-semibold text-[#c4643f]`}>{num}</p>
                <p className="text-sm text-[#1f1c18]/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#1f1c18] text-[#f6f1e9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#e8a07f] mb-4">What We Offer</p>
              <h2 className={`${serif.className} text-4xl md:text-5xl font-semibold`}>Services &amp; Menu</h2>
            </div>
            <a href="#contact" className="text-sm underline underline-offset-8 hover:text-[#e8a07f] transition">
              View full menu →
            </a>
          </div>
          <div className="divide-y divide-[#f6f1e9]/15 border-y border-[#f6f1e9]/15">
            {offerings.map((o) => (
              <div key={o.number} className="group grid md:grid-cols-12 gap-4 py-10 items-baseline hover:bg-[#f6f1e9]/[0.03] transition px-2">
                <span className="md:col-span-1 text-sm text-[#f6f1e9]/40">{o.number}</span>
                <h3 className={`${serif.className} md:col-span-4 text-3xl group-hover:text-[#e8a07f] transition`}>{o.title}</h3>
                <p className="md:col-span-5 text-[#f6f1e9]/60 leading-relaxed">{o.text}</p>
                <span className="md:col-span-2 md:text-right font-medium">{o.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c4643f] mb-4">Kind Words</p>
          <h2 className={`${serif.className} text-4xl md:text-5xl font-semibold`}>What customers are saying</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-[#1f1c18]/5 flex flex-col">
              <p className="text-[#c4643f] tracking-widest mb-4">★★★★★</p>
              <blockquote className={`${serif.className} text-xl leading-snug italic flex-1 mb-6`}>
                “{r.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e4d9c8]" />
                <div>
                  <p className="font-medium text-sm">{r.name}</p>
                  <p className="text-xs text-[#1f1c18]/50">{r.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[#c4643f] text-white rounded-[2.5rem] overflow-hidden grid md:grid-cols-2">
          <div className="p-10 md:p-16">
            <h2 className={`${serif.className} text-4xl md:text-5xl font-semibold leading-tight mb-6`}>
              Come say hello.
            </h2>
            <p className="text-white/80 mb-10 max-w-sm">
              A friendly invitation for visitors to stop by, call, or book online.
            </p>
            <div className="space-y-6 text-sm">
              <div>
                <p className="uppercase tracking-widest text-white/60 text-xs mb-1">Address</p>
                <p>123 Your Street, Your City, ST 00000</p>
              </div>
              <div>
                <p className="uppercase tracking-widest text-white/60 text-xs mb-1">Phone</p>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <p className="uppercase tracking-widest text-white/60 text-xs mb-2">Hours</p>
                <dl className="space-y-1">
                  {hours.map(([day, time]) => (
                    <div key={day} className="flex justify-between max-w-xs">
                      <dt>{day}</dt>
                      <dd className="text-white/80">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <a href="#" className="inline-block mt-10 bg-white text-[#c4643f] px-8 py-4 rounded-full font-medium hover:bg-[#1f1c18] hover:text-white transition">
              Book an Appointment
            </a>
          </div>
          <div className="relative min-h-[320px] bg-[#a8502f]">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.25em]">Google Map Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1c18]/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#1f1c18]/60">
          <p className={`${serif.className} text-xl text-[#1f1c18]`}>
            Your Brand<span className="text-[#c4643f]">.</span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c4643f] transition">Instagram</a>
            <a href="#" className="hover:text-[#c4643f] transition">Facebook</a>
            <a href="#" className="hover:text-[#c4643f] transition">Google</a>
          </div>
          <p>© 20XX Your Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
