/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins:{
    preflight: false
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#006db0  ',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  plugins: [],
}

