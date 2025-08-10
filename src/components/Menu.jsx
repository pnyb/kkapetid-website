import React from "react";
import Slider from "react-slick";

const menuPanels = [
  "/images/menuuuu.jpg",
  "/images/menuuuu.jpg",
  "/images/menuuuu.jpg",
  "/images/menuuuu.jpg",
  "/images/menuuuu.jpg",
  "/images/menuuuu.jpg",
  "/images/menuuuu.jpg",
  "/images/menuuuu.jpg",
];

export default function MenuCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    swipe: true,
  };

  return (
    <section
      id="menu"
      className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-brand-light to-brand-medium overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-dark opacity-10 pointer-events-none"></div>

      {/* Decorative shapes */}
      <svg
        className="absolute top-10 left-[-80px] w-64 h-64 opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      ></svg>

      <svg
        className="absolute bottom-10 right-[-80px] w-72 h-72 opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      ></svg>
      <div className="max-w-5xl mx-auto">
        {/* Carousel */}
        <Slider {...settings}>
          {menuPanels.map((src, index) => (
            <div key={index} className="px-4">
              <img
                src={src}
                alt={`Menu Panel ${index + 1}`}
                className="rounded-lg shadow-lg mx-auto object-contain max-h-[75vh] border-4 border-brand-light"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>

        {/* Tagline + CTA at bottom */}
        <div className="mt-12 max-w-5xl mx-auto text-center">
          <p
            className="text-xl md:text-2xl font-semibold font-serif tracking-wide italic text-brand-dark mb-6"
            style={{ textShadow: "1px 1px 3px rgba(84,100,100,0.5)" }}
          >
            Fresh & hot, just one call away!
          </p>

          <a
            href="tel:+639959812488"
            className="w-full md:w-1/2 bg-gradient-to-r from-brand-medium to-brand-dark text-white font-montserrat font-bold uppercase tracking-widest py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <span>📞</span> Call to Order
          </a>
        </div>
      </div>
    </section>
  );
}
