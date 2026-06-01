import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { name: 'About',   href: '#about'   },
  { name: 'Menu',    href: '#menu'    },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Visit Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-darker text-white">
      {/* Top area */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo2.jpg"
              alt="KKapetid logo"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-light/40"
            />
            <span className="font-display font-bold text-xl text-white">kkapetid</span>
          </div>
          <p className="text-white/55 text-sm leading-relaxed font-serif">
            More than coffee, more than pizza — we're a community that feels like home. Visit us
            in Cotabato City.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://facebook.com/kkapetid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-medium flex items-center justify-center transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://instagram.com/kkapetid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-medium flex items-center justify-center transition-colors"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="text-white/60 hover:text-brand-light text-sm transition-colors"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Contact</p>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3 items-start">
              <span className="text-base mt-0.5">📍</span>
              <span className="text-white/60 leading-snug">
                Sinsuat Avenue, Esteros, RH10<br />Cotabato City, 9600
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-base">📞</span>
              <a href="tel:+639959812488" className="text-white/60 hover:text-brand-light transition-colors">
                +63 995 981 2488
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-base">🕐</span>
              <span className="text-white/60">Mon–Sat · 12PM–10PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 md:px-16 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} KKapetid Café &amp; Resto. All rights reserved.</p>
          <p>Made with ❤️ in Cotabato City 🇵🇭</p>
        </div>
      </div>
    </footer>
  );
}
