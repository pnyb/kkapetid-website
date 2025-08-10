import React, { useState } from "react";

export default function Gallery() {
  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl text-center mb-12 text-brick font-montserrat font-bold uppercase tracking-widest">
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-48 md:h-60 cursor-pointer hover:scale-105 transition-transform"
            loading="lazy"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              className="rounded-lg max-h-[80vh] max-w-full object-contain"
            />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 text-white text-3xl sm:text-4xl font-light p-1 rounded transition z-60 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Prev button */}
            <button
              onClick={prevImage}
              className="fixed left-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl font-light p-1 rounded transition z-60 cursor-pointer select-none"
              aria-label="Previous image"
            >
              &#10094;
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="fixed right-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl font-light p-1 rounded transition z-60 cursor-pointer select-none"
              aria-label="Next image"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
