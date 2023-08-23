/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      aspectRatio: {
        '4/3': '4/3'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
