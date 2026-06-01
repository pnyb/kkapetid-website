import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-brand-medium hover:bg-brand-dark text-white shadow-lg flex items-center justify-center transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Floating call button (mobile) */}
      <a
        href="tel:+639959812488"
        aria-label="Call to order"
        className={`fixed bottom-8 left-8 z-40 md:hidden flex items-center gap-2 bg-slate-cafe hover:bg-slate-deep text-white text-xs font-bold px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <span className="text-base">📞</span> Order Now
      </a>
    </>
  );
}
