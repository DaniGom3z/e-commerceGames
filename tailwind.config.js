/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': 'rgb(40, 47, 72)', 
        'nav-color':'rgb(243,89,35)',
        'footer-color':'rgb(125,126,180)',
      },
    },
  },
  plugins: [],
}