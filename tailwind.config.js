/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'"Poppins", sans-serif'
      },
      colors:{
        'primary':'#f43f5e',
        'primary-dark':'#e11d48'
      }
    },  
  },
  plugins: [],
}
