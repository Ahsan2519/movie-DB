/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#282C34',
        textColor:'#D6D8D9',
        headerolor: '#343A3F',
        headerTxtColor:'#d5d5d5',
        btnbg:'#6C747D'
      }
    },
  },
  plugins: [],
}

