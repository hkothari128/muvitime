/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins:{
    preflight: false
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "landing":"url(https://wallpaperaccess.com/full/3658597.jpg)"
      // },
      colors:{
        primary: '#157AF1',
        secondary: '#157AF1',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  plugins: [require('flowbite/plugin'),require("tw-elements/dist/plugin.cjs"),require("daisyui")],
}

