export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <img
          src="/images/about.jpg"
          alt="About us"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl mb-6 text-brick font-montserrat font-bold uppercase tracking-widest">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-serif">
            Kkapetid started as a simple idea: to create a cozy spot where
            family and friends can gather over great coffee, delicious pizza,
            and comforting pasta. Inspired by the warmth of Filipino
            togetherness and the timeless flavors of Italy, every dish we serve
            is crafted with fresh ingredients and a touch of care.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-serif mt-4">
            Whether you’re here for a morning brew, a shared meal, or a place to
            make memories, Kkapetid is more than just a café—it’s a community
            that feels like home.
          </p>
        </div>
      </div>
    </section>
  );
}
