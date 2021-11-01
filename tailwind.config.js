const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        red_hat: "'Red Hat Display', sans-serif",
      },
      backgroundImage: {
        "desktop-pattern": "url('/src/assets/pattern-background-desktop.svg')",
        "mobile-pattern": "url('/src/assets/pattern-background-mobile.svg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#009eeb",
        dark: "#212A4F",
      },
      tw_blue: colors.blue,
      link_blue: {
        light: "#392EB2",
      },
      custom_gray: {
        light: "#585858",
      },
      custom_purple: {
        light: "#dfe8ff",
        active_purple: "#7B75D6",
        bg_active_purple: "#766CF1",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.amber,
    },
    boxShadow: {
      "3xl_purple": "0px 24px 26px 1px rgba(221,219,250,1)",
    },
  },
  variants: {
    extend: {
      textColor: ["active", "hover"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
