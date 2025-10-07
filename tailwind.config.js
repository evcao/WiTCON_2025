// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fonts
      fontFamily: {
        ari: ['"Ari W9500"', "system-ui", "sans-serif"],
        ariCondensed: ['"Ari W9500 Condensed"', "system-ui", "sans-serif"],
        ariDisplay: ['"Ari W9500 Display"', "system-ui", "sans-serif"],
      },

      // animation
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%":   { transform: "translate(0px, 0px) scale(1)" },
          "33%":  { transform: "translate(30px, -50px) scale(1.1)" },
          "66%":  { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },

      // backgrounds
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
