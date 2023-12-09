/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html}"],
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}

