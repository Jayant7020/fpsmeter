/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'Bungee': 'Bungee, sans-serif',
        'Alkatra': 'Alkatra, sans-serif',
        'Amaranth': 'Amaranth, sans-serif',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography')
  ],
}

