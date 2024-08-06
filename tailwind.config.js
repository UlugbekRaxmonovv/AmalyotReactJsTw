/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E4D3F',
        secondary: '#ffcc00',
        accent: '#86583D',
        background: '#F8F9FA',
        text: '#F7F7F7',
        success: '#324A3B',
        error: '#A4816D',
        one: "#5E3928 ",
        two: "#0B3F37 ",
        three: "#A1A1A1",
        four: "#031412",
        five: "#E6E8E7",
        six: "#0B3F37",
        seven: "#9B0000",
      },
      screens: {
        xs: '480px', 
        sm:"360px",
        xl:"1280px" ,
        sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      },
      fontFamily: {
        sans: ['Montserrat'],
        sans: ["Mont", "sans-serif"],
        serif: ["Kalnia Glaze", "serif"],
      },
    },
  },
  plugins: [],
}
