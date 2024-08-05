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
      },
      screens: {
        xs: '480px', 
        sm:"360px",
        xl:"1280px" 
      },
      fontFamily: {
        sans: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
