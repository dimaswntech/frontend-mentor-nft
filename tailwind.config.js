/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'Verydarkbluemain': 'hsl(217, 54%, 11%)', //(main BG)
        'Verydarkbluecard': 'hsl(216, 50%, 16%)', //(card BG)
        'Verydarkblueline': 'hsl(215, 32%, 27%)', //(line)
        'White': 'hsl(0, 0%, 100%)',
        'Softblue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)'

      }
    },
  },
  plugins: [],
}
