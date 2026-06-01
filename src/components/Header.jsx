import React from 'react';

export default function Header() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('/images/index2.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-darker/60 via-slate-darker/55 to-slate-darker/75" />
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #f5d5c8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Content — pt-20 on mobile clears navbar, pb-28 clears scroll hint */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col justify-center min-h-screen py-24 md:py-0 md:min-h-0">

        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-light mb-6 animate-fade-in mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse flex-shrink-0" />
          <span>Cotabato City's Favorite Café</span>
        </div>

        {/* Title — kape + kapatid wordplay */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Where <em className="text-brand-light not-italic">Kape</em> Brings<br className="hidden sm:block" />{' '}
          <em className="text-brand-light not-italic">Kapatid</em> Together.
        </h1>

        {/* Subhead — short */}
        <p className="text-base sm:text-lg md:text-xl text-white/75 font-serif italic mb-8 max-w-xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Coffee, pizza &amp; good company — that's <strong className="font-bold not-italic text-white">kkapetid</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <a href="#menu" className="bg-brand-medium hover:bg-brand-dark text-white font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
            Explore Our Menu
          </a>
          <a href="tel:+639959812488" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full backdrop-blur-sm transition-all hover:-translate-y-1">
            📞 Call to Order
          </a>
        </div>

        {/* Stats — even gap, pb-1 so labels aren't clipped */}
        <div className="mt-10 pt-6 pb-4 border-t border-white/15 flex justify-center gap-8 sm:gap-12 md:gap-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {[
            { num: '4.6★', label: 'Google Rating' },
            { num: '12PM',  label: 'Opens Daily'   },
            { num: 'Mon–Sat', label: 'Operating Days' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-bold text-xl sm:text-2xl text-brand-light">{num}</p>
              <p className="text-xs text-white/55 uppercase tracking-widest mt-1 pb-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}