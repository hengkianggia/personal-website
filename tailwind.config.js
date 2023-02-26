/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f9f9",
      },
      spacing: {
        "5persen": "5%",
        "10persen": "10%",
        "15persen": "15%",
        "20persen": "20%",
        "24persen": "24%",
        "25persen": "25%",
        "30persen": "30%",
        "32persen": "32%",
        "35persen": "35%",
        "40persen": "40%",
        "45persen": "45%",
        "48persen": "48%",
        "49persen": "49%",
        "50persen": "50%",
        "55persen": "55%",
        "60persen": "60%",
        "65persen": "65%",
        "70persen": "70%",
        "75persen": "75%",
        "80persen": "80%",
        "85persen": "85%",
        "90persen": "90%",
        "95persen": "95%",
        "100persen": "100%",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      letterSpacing: {
        big: "1em",
      },
    },
  },
  plugins: [],
};
