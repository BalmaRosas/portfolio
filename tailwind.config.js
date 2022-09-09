/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainPurple: "#7A84C9",
      pastelPurple: "#DFE3FC",
      yolk: "#F1C143",
      lightBlue: "#CEEAFC",
      medBlue: "#7AAECF",
      
    },
    fontSize: {
      'sm': '15px',
      'base': '26px',
      'lg': '38px',
      'xl': '35px',
      '2xl': '64px',
      '3xl': '74px',
      '4xl': '87px',
      
    extend: {},
  },
  plugins: [],

  }
}
