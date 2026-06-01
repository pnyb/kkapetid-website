import React, { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const reviews = [
  {
    name: 'Floyd C.',
    text: "Kkapetid in Cotabato City offers a charming alfresco café experience that's perfect for a laid-back coffee date or casual hangout.",
    avatar: '/images/avatar1.png',
    rating: 5,
  },
  {
    name: 'Chiclet T.',
    text: "Am here almost everyday when I'm in Cotabato. Their espresso based coffee drinks are spot on! Avocado Bliss and their Guyabano Slush are sure thirst quenchers! Pizza? Don't get me started! Highly recommended!",
    avatar: '/images/avatar2.png',
    rating: 5,
  },
  {
    name: 'Ainah D.',
    text: 'The ambiance is good. Snacks are good too. Open area. Very cozy.',
    avatar: '/images/avatar2.png',
    rating: 4,
  },
  {
    name: 'Sabr',
    text: 'I barely give 5 stars, but this one deserves 5 stars. 9/10, actually. I don\'t need to explain more. Come visit this place.',
    avatar: '/images/avatar2.png',
    rating: 5,
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-1 justify-center mb-4">
      {Array(5).fill(0).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.363-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 4s unless paused
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(t);
  }, [paused]);

  const goTo = (i) => {
    setActive(i);
    setPaused(true);
    // Resume auto-advance after 8s of manual interaction
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: '#f7e3da' }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="section-label justify-center reveal" style={{ color: '#546464' }}>
          Customer Love
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-cafe mb-4 reveal delay-100">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 font-serif reveal delay-200">
          Real reviews from real customers — and they love it here!
        </p>
      </div>

      <div className="max-w-2xl mx-auto reveal delay-300">
        {/* Stacked card display */}
        {/* Invisible spacer card — sizes the container to fit the longest review */}
        <div className="relative">
          <div className="invisible pointer-events-none">
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between">
              <div>
                <div className="font-display text-6xl text-brand-light leading-none mb-2 select-none">"</div>
                <p className="text-gray-600 font-serif italic text-sm leading-relaxed">
                  {reviews.reduce((a, b) => a.text.length > b.text.length ? a : b).text}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gray-100" />
                  <div>
                    <p className="font-bold text-slate-cafe text-sm">Name</p>
                    <p className="text-xs text-gray-400">Google Review</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array(5).fill(0).map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.363-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Actual stacked cards — absolutely positioned over the spacer */}
          {reviews.map((r, i) => {
            const offset = (i - active + reviews.length) % reviews.length;
            const isActive = offset === 0;
            const isBehind1 = offset === 1;

            return (
              <div
                key={i}
                onClick={() => !isActive && goTo(i)}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isActive
                    ? 'translateY(0px) scale(1)'
                    : isBehind1
                    ? 'translateY(12px) scale(0.95)'
                    : 'translateY(22px) scale(0.90)',
                  opacity: isActive ? 1 : isBehind1 ? 0.55 : 0.25,
                  zIndex: isActive ? 30 : isBehind1 ? 20 : 10,
                  cursor: isActive ? 'default' : 'pointer',
                }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="font-display text-6xl text-brand-light leading-none mb-2 select-none">"</div>
                    <p className="text-gray-600 font-serif italic text-sm leading-relaxed">
                      {r.text}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={r.avatar}
                        alt={r.name}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-light"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-bold text-slate-cafe text-sm">{r.name}</p>
                        <p className="text-xs text-gray-400">Google Review</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array(5).fill(0).map((_, si) => (
                        <svg key={si} className={`w-4 h-4 ${si < r.rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.363-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot indicators + progress bar */}
        <div className="flex flex-col items-center gap-4 mt-16">
          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Review ${i + 1}`}
                style={{
                  width: active === i ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: active === i ? '#546464' : '#849d9a',
                  opacity: active === i ? 1 : 0.45,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            ))}
          </div>

          {/* Auto-progress bar */}
          {!paused && (
            <div className="w-32 h-0.5 rounded-full overflow-hidden bg-brand-medium/20">
              <div
                key={active}
                className="h-full bg-brand-dark rounded-full"
                style={{
                  animation: 'progressBar 4s linear forwards',
                }}
              />
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => goTo((active - 1 + reviews.length) % reviews.length)}
            className="w-10 h-10 rounded-full border-2 border-brand-medium/40 hover:border-brand-dark hover:bg-brand-dark hover:text-white text-brand-dark flex items-center justify-center transition-all text-lg font-light"
            aria-label="Previous review"
          >
            ‹
          </button>
          <button
            onClick={() => goTo((active + 1) % reviews.length)}
            className="w-10 h-10 rounded-full border-2 border-brand-medium/40 hover:border-brand-dark hover:bg-brand-dark hover:text-white text-brand-dark flex items-center justify-center transition-all text-lg font-light"
            aria-label="Next review"
          >
            ›
          </button>
        </div>
      </div>

      {/* Rating summary card */}
      <div className="max-w-md mx-auto mt-16 bg-white rounded-2xl shadow-lg p-6 text-center reveal delay-400">
        <p className="font-display font-bold text-5xl text-slate-cafe">4.8</p>
        <div className="flex justify-center gap-1 my-2">
          {Array(5).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.363-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-500 text-sm">Based on Google Reviews</p>
        
         <a href="https://maps.google.com/?q=kkapetid"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-brand-medium font-semibold text-sm hover:underline"
          >
          See all reviews on Google →
        </a>
      </div>
    </section>
  );
}