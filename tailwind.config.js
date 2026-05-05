/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#8B1A4A',
        gold: '#B8860B',
        navy: '#0F2340',
        body: '#444444',
        lightgray: '#F5F5F5',
        midgray: '#CCCCCC',
        whatsapp: '#25D366',
      },
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
