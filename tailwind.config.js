/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        heroShadow: "0px 0px 16px rgba(0,0,0,0.15)",
      },
    },
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
