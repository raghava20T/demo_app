const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F5F5F5",
        "paper-color": "#F3EDF4",
      },
      bgGradientDeg: {
        75: "122.62deg",
      },
    },
  },
  plugins: [],
};
