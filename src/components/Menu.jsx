import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useReveal from '../hooks/useReveal';

const menuPanels = [
  { src: '/images/menuuuu.jpg',  label: 'Drinks',        desc: 'Espresso, Iced Drinks & More' },
  { src: '/images/menuuuu2.jpg', label: 'Drinks',        desc: 'Fruit Blends & Specials'      },
  { src: '/images/menuuuu3.jpg', label: 'Drinks',        desc: 'Hot & Cold Beverages'         },
  { src: '/images/menuuuu4.jpg', label: 'Food & Snacks', desc: 'Pizza & Pasta'              },
  { src: '/images/menuuuu5.jpg', label: 'Food & Snacks', desc: 'Mains Selection'                },
  { src: '/images/menuuuu6.jpg', label: 'Food & Snacks', desc: 'Snacks & Bites'               },
  { src: '/images/menuuuu7.jpg', label: 'Desserts',      desc: 'Sweet Treats'                 },
  { src: '/images/menuuuu8.jpg', label: 'Bundle Meals',  desc: 'Value Bundles'                },
  { src: '/images/menuuuu9.jpg', label: 'Food Trays',    desc: 'Group & Party Trays'          },
];

const categories = ['All', 'Drinks', 'Food & Snacks', 'Desserts', 'Bundle Meals', 'Food Trays'];

export default function Menu() {
  const ref = useReveal();
  const sliderRef = useRef(null);
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' ? menuPanels : menuPanels.filter((p) => p.label === activeTab);

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setTimeout(() => sliderRef.current?.slickGoTo(0), 50);
  };

  const settings = {
    dots: true,
    infinite: filtered.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
    swipe: true,
    lazyLoad: 'progressive',
  };

  return (
    <section
      id="menu"
      ref={ref}
      className="relative py-24 px-6 md:px-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5d5c8 0%, #e8cfc5 50%, #d9c4be 100%)' }}
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-medium/10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-brand-dark/8 pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center reveal" style={{ color: '#546464' }}>Our Menu</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-cafe mb-4 reveal delay-100">
            Something for <em className="text-brand-medium not-italic">Everyone</em>
          </h2>
          <p className="text-gray-600 font-serif reveal delay-200">Browse through our menu — freshly made, every single day.</p>
        </div>

        {/* Category tabs — compact, no-wrap on mobile */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal delay-200 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-brand-dark text-white shadow-md scale-105'
                  : 'bg-white/70 text-brand-dark hover:bg-white border border-brand-medium/30 hover:border-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel — paddingBottom for dots */}
        <div className="reveal delay-300 relative" style={{ paddingBottom: '48px' }}>
          <div className="absolute top-3 right-3 z-10 bg-black/30 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {filtered.length} panel{filtered.length !== 1 ? 's' : ''}
          </div>

          <Slider ref={sliderRef} {...settings}>
            {filtered.map(({ src, label, desc }, i) => (
              <div key={i} className="menu-carousel-slide px-1 focus:outline-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white mx-auto">
                  <img
                    src={src}
                    alt={`${label} — ${desc}`}
                    className="w-full object-contain rounded-2xl"
                    style={{ maxHeight: '75vh', display: 'block' }}
                    loading="lazy"
                  />
                  {/* Compact label — won't block image content */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3 pointer-events-none">
                    <span className="inline-block bg-brand-medium/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase mb-0.5">
                      {label}
                    </span>
                    <p className="text-white font-semibold text-sm leading-tight">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA — Call to Order only */}
        <div className="mt-6 reveal delay-400">
          <div className="bg-slate-cafe rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand-medium/15" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-brand-light/10" />
            <p className="text-brand-light font-display italic text-xl md:text-2xl mb-2 relative z-10">
              Fresh &amp; hot, just one call away!
            </p>
            <p className="text-white/60 text-sm mb-6 relative z-10">
              Call or message us to place your order. Pick-up or delivery available.
            </p>
            
            <a href="tel:+639959812488"
              className="relative z-10 inline-flex items-center justify-center gap-3 bg-brand-medium hover:bg-brand-light hover:text-slate-cafe text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 w-full md:w-auto"
            >
              <span className="text-lg">📞</span> Call to Order — +63 995 981 2488
            </a>
            <p className="text-white/40 text-xs mt-4 relative z-10 uppercase tracking-widest">Mon–Sat · 12:00 PM – 10:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}