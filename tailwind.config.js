/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#151619",
        "dark-2": "#1d1f22",
        "dark-3": "#2b2d31",
        "dark-4": "#35393f",
        "grey-1": "#5a6069",
        "grey-2": "#7c8187",
        "grey-3": "#c1c4cb",
        "grey-4": "#e4e4e4",
        "off-white": "#f5f5f5",
        "mark-orange": "#e46643",
        "active-orange": "#f39765",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoslab: ["Roboto Slab", "sans-serif"],
        robotomono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
