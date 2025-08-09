export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/index2.jpg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          More Than Coffee, More Than Pizza — We’re{" "}
          <span className="text-[#f5d5c8] font-serif italic">kkapetid</span>
        </h1>
        <p className="mb-8 text-lg md:text-xl drop-shadow-md">
           A place where friends become family over food and conversation.
        </p>
       <a
          href="#menu"
          className="px-6 py-3 bg-brand-medium text-white font-semibold rounded-full hover:bg-brand-dark transition"
        >
          Explore Our Menu
        </a>
      </div>
    </section>
  );
}
