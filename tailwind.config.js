/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ['Baskervville', 'serif'],
        cinzel: ['Cinzel Decorative', 'serif'],
        garamond: ['EB Garamond', 'serif'],
        greatVibes: ['Great Vibes', 'cursive'],
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

