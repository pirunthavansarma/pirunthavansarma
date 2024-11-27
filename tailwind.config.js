// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specifies the files Tailwind will scan for class names
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'hero': ['Sriracha', 'cursive'], // Adds a custom font family named 'hero'
      },
    },
  },
  plugins: [], // You can add Tailwind plugins here if needed
}
