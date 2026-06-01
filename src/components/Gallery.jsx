import React, { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const galleryImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
];

export default function Gallery() {
  const ref = useReveal();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape')      setLightbox(null);
      if (e.key === 'ArrowRight')  setLightbox((i) => (i + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft')   setLightbox((i) => (i - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="gallery" ref={ref} className="py-24 px-6 md:px-16" style={{ background: '#faf0e8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-label justify-center reveal">Gallery</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-cafe mb-4 reveal delay-100">
            A Peek Inside <em className="text-brand-medium not-italic">KKapetid</em>
          </h2>
          <p className="text-gray-500 font-serif reveal delay-200">
            Follow us{' '}
            <a href="https://instagram.com/kkapetid" target="_blank" rel="noopener noreferrer" className="text-brand-medium hover:underline">
              @kkapetid
            </a>{' '}
            for daily updates
          </p>
        </div>

        {/* Uniform 3-col grid — all 6 same aspect-square size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="reveal delay-100 group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover-lift aspect-square"
            >
              <img
                src={src}
                alt={`KKapetid Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-darker/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-bold tracking-widest uppercase translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Photo
                </span>
              </div>
              <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-3.5 h-3.5 text-slate-cafe" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white text-4xl font-light z-60 transition"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
            {lightbox + 1} / {galleryImages.length}
          </div>

          {/* Prev — equal left padding */}
          <button
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl font-thin z-60 transition select-none w-10 flex justify-center"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + galleryImages.length) % galleryImages.length); }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image — mx-12/mx-16 keeps it off the buttons equally on both sides */}
          <img
            src={galleryImages[lightbox]}
            alt={`Gallery ${lightbox + 1}`}
            className="max-h-[80vh] rounded-2xl shadow-2xl object-contain mx-12 sm:mx-16"
            style={{ maxWidth: 'calc(100vw - 100px)' }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next — equal right padding */}
          <button
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl font-thin z-60 transition select-none w-10 flex justify-center"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % galleryImages.length); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}