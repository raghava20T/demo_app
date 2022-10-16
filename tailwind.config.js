const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F2ECF3",
        "paper-color": "#F3EDF4",
        "black-color": "#252525",
      },
      fontFamily: {
        thin: ["Metropolis-thin"],
        extralight: ["Metropolis-extra-light"],
        light: ["Metropolis-light"],
        normal: ["Metropolis-regular"],
        medium: ["Metropolis-medium"],
        semibold: ["Metropolis-semi-bold"],
        bold: ["Metropolis-bold"],
        extrabold: ["Metropolis-extra-bold"],
        black: ["Metropolis-black"],
      },
    },
  },
  plugins: [],
};
