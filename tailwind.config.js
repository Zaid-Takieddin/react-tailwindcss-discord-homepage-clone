/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#404EED",
        darkgray: "#23272A",
        indigo: "#5865F2",
        lightindigo: "#7983F5",
      },
      spacing: {
        128: "38rem",
        140: "50rem",
        150: "120rem",
        0.5: "1px",
      },
      lineHeight: {
        16: "4rem",
      },
      screens: {
        md: "824px",
      },
    },
  },
  plugins: [],
};
