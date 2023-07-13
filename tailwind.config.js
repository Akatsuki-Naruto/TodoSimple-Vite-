/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#00ffff",
          2: "#ccd6f6",
          3: "#a9a9a9",
          4: "#0a192f",
          5: "#00ff00",
          6: "#a8b2d1",
          7: "#8892b0",
          8: '#00ccff',
          9: '#202429b4',
          10:'#006d88'
        },
        secondary: {
          300: "#8892b0",
        },
      },
      width: {
        25: "25%",
      },
      borderWidth: {
        1: "1px",
      },
      zIndex: {
        11: "11",
      },
      fontFamily: {
        Gill: ["Gill Sans", "Gill Sans MT", "Trebuchet MS"],
        Courier: ["Courier New", "Courier", "monospace"],
        Franklin: [
          "Franklin Gothic Medium",
          "Arial Narrow",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        13: "13px",
      },
    },
  },
  plugins: [],
};
