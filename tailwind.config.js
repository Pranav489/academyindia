/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#EE3124",
          blue: "#1B75BB",
          green: "#39B54A",
          yellow: "#FBB040",
          purple: "#A84498",
          darkblue: "#0D4F8A",
          lightblue: "#5BB8F5",
        },
      },
      fontFamily: {
        fredoka: ["'Fredoka One'", "cursive"],
        nunito: ["'Nunito'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
