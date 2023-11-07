/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lightgray: {
          "100": "#cdcdcd",
          "200": "#cbcbcb",
        },
        gray: {
          "100": "rgba(0, 0, 0, 0.2)",
          "200": "rgba(0, 0, 0, 0.8)",
          "300": "rgba(0, 0, 0, 0.5)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "5xl": "24px",
      "81xl": "100px",
      "31xl": "50px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
