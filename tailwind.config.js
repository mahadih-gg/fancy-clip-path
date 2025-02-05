/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', "serif"],
        belanosima: ["Belanosima", "serif"],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: { fontFamily: '"Josefin Sans", serif' },
        "h1, h2, h3, h4, h5, h6": { fontFamily: "Belanosima, serif" },
      });
    },
  ],
};
