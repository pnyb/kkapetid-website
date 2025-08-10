import React from "react";

const reviews = [
  {
    name: "Floyd C.",
    text: "Kkapetid in Cotabato City offers a charming alfresco café experience that’s perfect for a laid-back coffee date or casual hangout.",
    avatar: "/images/avatar1.png",
    rating: 5,
  },
  {
    name: "Chiclet T.",
    text: "Am here almost everyday when I'm in Cotabato. Their espresso based coffee drinks are spot on! Avocado Bliss and their Guyabano Slush are sure thirst quenchers! Pizza? Don't get me started! It's highly recommended! The place is perfect for your Instagram posts too!!",
    avatar: "/images/avatar2.png",
    rating: 5,
  },
  {
    name: "Ainah D.",
    text: "The ambiance is good. Snacks are good too. Open area. Very cozy.",
    avatar: "/images/avatar2.png",
    rating: 4,
  },
];

// Helper component to render stars
function Stars({ rating }) {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        } inline-block`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.363-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
      </svg>
    ));
  return <div>{stars}</div>;
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-20 px-6 md:px-20"
      style={{ backgroundColor: "#f7e3da" }}
    >
      <h2 className="text-4xl text-center mb-12 text-brick font-montserrat font-bold uppercase tracking-widest">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {reviews.map(({ name, text, avatar, rating }, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
              loading="lazy"
            />
            <Stars rating={rating} />
            <p className="italic mt-4 text-gray-700 font-serif">"{text}"</p>
            <p className="mt-4 font-semibold text-brick">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
