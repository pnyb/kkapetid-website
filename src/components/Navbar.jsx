import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About',    href: '#about'   },
  { name: 'Menu',     href: '#menu'    },
  { name: 'Gallery',  href: '#gallery' },
  { name: 'Reviews',  href: '#reviews' },
  { name: 'Visit Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen,   setIsOpen]   = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">

          {/* Logo — full image, no crop, no text beside it */}
          <a href="/" className="flex items-center group">
            <img
              src="/images/logo2.jpg"
              alt="KKapetid"
              className="h-12 w-12 object-cover rounded-full transition-opacity group-hover:opacity-80"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.name}>
                
                  <a href={l.href}
                  className={`relative text-[13px] font-medium tracking-[0.08em] uppercase transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-brand-medium after:transition-all after:duration-300 ${
                    active === l.href.slice(1)
                      ? 'text-brand-dark after:w-full'
                      : `after:w-0 hover:after:w-full ${scrolled ? 'text-slate-cafe hover:text-brand-dark' : 'text-white/90 hover:text-white'}`
                  }`}
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              
              <a href="tel:+639959812488"
               className="flex items-center gap-2 bg-brand-medium hover:bg-brand-dark text-white text-[12px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>📞</span> Call to Order
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition ${scrolled ? 'text-slate-cafe' : 'text-white'}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`block w-6 h-0.5 rounded transition-all duration-300 bg-current ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 rounded transition-all duration-300 bg-current ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 rounded transition-all duration-300 bg-current ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col pt-20 px-8 pb-8 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <button onClick={close} className="absolute top-5 right-5 text-slate-cafe text-2xl font-light" aria-label="Close">×</button>
          {/* Logo in drawer — full image */}
          <img
            src="/images/logo2.jpg"
            alt="KKapetid"
            className="h-16 w-16 object-cover rounded-full mb-6 self-center"
          />
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              
              <a key={l.name}
                href={l.href}
                onClick={close}
               className="text-slate-cafe font-medium tracking-[0.06em] uppercase text-sm py-3 border-b border-brand-light hover:text-brand-medium transition-colors"
              >
                {l.name}
              </a>
            ))}
            
            <a href="tel:+639959812488"
              onClick={close}
              className="mt-4 flex items-center justify-center gap-2 bg-brand-medium text-white font-bold py-3 rounded-full shadow hover:bg-brand-dark transition"
            >
              📞 Call to Order
            </a>
          </nav>
          <p className="mt-auto text-xs text-gray-400 text-center">Mon–Sat · 10AM – 9PM</p>
        </div>
      </div>
    </>
  );
}