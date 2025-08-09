// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f5d5c8',   // cream/light peach
          medium: '#849d9a',  // soft teal
          dark: '#546464',    // dark slate
        },
        cream: '#f5d5c8',
        brick: '#546464',    // replacing old brick with brand.dark
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
