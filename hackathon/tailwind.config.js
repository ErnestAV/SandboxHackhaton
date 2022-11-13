const { urlencoded } = require('body-parser');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
}

