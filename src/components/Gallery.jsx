import React, { useState } from 'react';

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

  // Open modal and set current image index
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => setIsOpen(false);

  // Show previous image
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  // Show next image
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-brick">Gallery</h2>
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

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image container
          >
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              className="rounded-lg max-h-[80vh] object-contain"
            />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-700"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Prev/Next buttons */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-700 select-none"
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-700 select-none"
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
