const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "Brand-gray-1": "#DADCE0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
