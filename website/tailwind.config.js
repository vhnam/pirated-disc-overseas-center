const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      fontFamily: {
        sans: ["Lalezar", ...defaultTheme.fontFamily.sans],
        serif: ["Pinyon Script", ...defaultTheme.fontFamily.serif],
        content: ["Cuprum", ...defaultTheme.fontFamily.sans],
      },
      grayscale: {
        60: "60%",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      spacing: {
        'screen-1/2': '50vw'
      },
      textIndent: {
        negative: "-100%",
      },
      transitionProperty: {
        filter: "filter",
      },
    },
  },
  plugins: [],
};
