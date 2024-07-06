/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins:["Poppins", "sans-serif"],
      },
      fontSize: {
        '17pxl':'17px',
        '28px':'28px',
        '80pxl':'80px',
        '2.7xl': '2.7rem',
      },
      height:{
        '8.5vh':"8.5vh",
        '30vh':'30vh',
        '40vh':'40vh',
        '50vh':'50vh',
        '60vh':'60vh',
        '65vh':'65vh',
      }
    },
  },
  plugins: [],
};
