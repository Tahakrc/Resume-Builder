/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      md: "5rem",
      lg: "7rem",
      sm: "3rem"
    },
    screens: {
      sm: "500px",
      md: "900px",
      lg: "1280px",
    },


  },
  plugins: [],
}