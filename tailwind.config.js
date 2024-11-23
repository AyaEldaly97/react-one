/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      center: true,
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: "#1ABC9C",
        teritary: "#1A252F"
      },
      screens:{
        "2xl" : "1320px"
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}

