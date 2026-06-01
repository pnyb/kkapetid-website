import React from 'react';

const items = [
  '☕ Fresh Coffee Daily',
  '🍕 Neapolitan Style Pizza',
  '🍪 Sweet Baked Treats',
  '🧋 Blended Drinks',
  '📍 Cotabato City',
  '📞 Call to Order',
  '🌿 Fresh Ingredients',
  '❤️ Made with Love',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-brand-dark text-brand-light overflow-hidden py-3">
      <div className="flex w-max animate-marquee gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 text-xs font-bold tracking-widest uppercase whitespace-nowrap"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-brand-medium opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
