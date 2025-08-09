import React from 'react';

export default function Menu() {
  const menuItems = [
    {
      name: "Pepperoni Pizza",
      category: "Pizza",
      regularPrice: "₱255",
      soloPrice: "₱145",
      image: "/images/PZpepperoni.jpg"
    },
    {
      name: "Garlic and Cheese",
      category: "Pizza",
      regularPrice: "₱255",
      soloPrice: "₱145",
      image: "/images/PZgc.jpg"
    }, {
      name: "Three Cheese",
      category: "Pizza",
      regularPrice: "₱255",
      soloPrice: "₱145",
      image: "/images/PZthree.jpg"
    },
    {
      name: "Taco Nacho",
      category: "Pizza",
      price: "₱295",
      image: "/images/PZtaco.jpg"
    }, {
      name: "Garlic Shrimp",
      category: "Pizza",
      price: "₱295",
      image: "/images/PZgs.jpg"
    },
    {
      name: "KK Supreme",
      category: "Pizza",
      price: "₱295",
      image: "/images/PZkk.jpg"
    },
    { name: "Asian Garlic Pasta", category: "Pasta", price: "₱135", image: "/images/PAsian.jpg" },
    { name: "Spaghetti Bolognese", category: "Pasta", price: "₱145", image: "/images/PAlfredo.jpg" },
    { name: "Baked Spaghetti", category: "Pasta", price: "₱145", image: "/images/PSpag.jpg" },
    { name: "Caramel Macchiato", category: "Drinks", price: "₱125", image: "/images/DMacci.png" },
    { name: "Spanish Latte", category: "Drinks", price: "₱125", image: "/images/DSpanish.png" },
    { name: "Tres Leches", category: "Drinks", price: "₱125", image: "/images/DTres.png" },
    { name: "Salted Caramel", category: "Drinks", price: "₱145", image: "/images/DSalted.png" },
    { name: "Dirty Matcha", category: "Drinks", price: "₱155", image: "/images/DMatcha.png" },
    { name: "Mocha Frappe", category: "Drinks", price: "₱155", image: "/images/DMocha.png" },
    { name: "Ube Milkshake", category: "Drinks", price: "₱135", image: "/images/DUbe.png" },
    { name: "Mango Mania", category: "Drinks", price: "₱110", image: "/images/DMango.png" },
    { name: "Apple Lemon Pop", category: "Drinks", price: "₱125", image: "/images/DAppleLemon.png" },
  ];

  const categories = ["All", "Pizza", "Pasta", "Drinks"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 px-6 md:px-20" style={{ backgroundColor: '#f7e3da' }}>
      <h2 className="text-4xl font-bold text-center mb-12 text-brick">Our Menu</h2>

      {/* Category filters */}
      <div className="flex justify-center gap-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedCategory === cat
                ? "bg-brick text-white"
                : "bg-white text-brick border border-brick hover:bg-brick hover:text-white"
            } transition`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu items grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={item.image || "https://via.placeholder.com/400x250"}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
              {item.regularPrice && item.soloPrice ? (
                <div className="flex justify-between text-brick font-bold">
                  <span>Regular: {item.regularPrice}</span>
                  <span>Solo: {item.soloPrice}</span>
                </div>
              ) : (
                <span className="text-brick font-bold">{item.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
