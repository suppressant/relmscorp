/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "768px", min: "350px" },
      md: "768px",
      lg: "1080px",
      xl: { min: "1440px" },
    },
  },
  plugins: [],
};
