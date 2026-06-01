/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f5d5c8',
          medium: '#849d9a',
          dark: '#546464',
        },
        cream: '#f5d5c8',
        brick: '#546464',
        bg: {
          warm:    '#fdf6f0',
          section: '#faf0e8',
          muted:   '#f2e4d8',
        },
        slate: {
          cafe:   '#546464',
          light:  '#849d9a',
          deep:   '#3a4a4a',
          darker: '#262e2e',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        serif:   ['Lora', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out both',
        'fade-in':    'fadeIn 0.6s ease-out both',
        'float':      'float 4s ease-in-out infinite',
        'marquee':    'marquee 28s linear infinite',
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: 'translateY(32px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: 0 }, to: { opacity: 1 } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        marquee:  { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};