/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "header" : "rgb(0,0,0)",
        "header-text" : "#b2de62",
        "background" : "#252f9c"
      }
    },
  },
  plugins: [],
}

