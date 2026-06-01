import React from 'react';
import useReveal from '../hooks/useReveal';

const pillars = [
  { icon: '☕', title: 'Great Coffee', desc: 'Freshly brewed espresso-based drinks and local favorites' },
  { icon: '🍕', title: 'Delicious Pizza', desc: 'Crispy, flavorful pizzas with generous toppings' },
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'Quality ingredients for every dish we serve' },
  { icon: '🏡', title: 'Homey Ambiance', desc: 'Open, cozy space — perfect for friends and family' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative reveal-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="Inside KKapetid Café"
                className="w-full h-80 md:h-[480px] object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-darker/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-medium text-white rounded-2xl p-5 shadow-xl animate-float">
              <p className="font-display font-bold text-2xl leading-none">4.6★</p>
              <p className="text-xs text-white/80 tracking-widest uppercase mt-1">Google Reviews</p>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -left-4 md:-left-8 bg-white border border-brand-light rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-display font-bold text-lg text-slate-cafe leading-none">Est. 2021</p>
              <p className="text-xs text-gray-400 mt-0.5">Cotabato City</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="section-label reveal">Our Story</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-cafe leading-tight mb-6 reveal delay-100">
              Where Every Cup Tells a <em className="text-brand-medium not-italic">Story</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 font-serif reveal delay-200">
              Kkapetid started as a simple idea: to create a cozy spot where family and friends can
              gather over great coffee, delicious pizza, and comforting pasta. Inspired by the warmth
              of Filipino togetherness and the timeless flavors of Italy, every dish we serve is
              crafted with fresh ingredients and a touch of care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 font-serif reveal delay-200">
              Whether you're here for a morning brew, a shared meal, or a place to make memories,
              Kkapetid is more than just a café — it's a community that feels like home.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4 reveal delay-300">
              {pillars.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="hover-lift bg-peach-50 border border-brand-light/60 rounded-2xl p-4"
                >
                  <span className="text-2xl mb-2 block">{icon}</span>
                  <h4 className="font-bold text-slate-cafe text-sm mb-1">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
