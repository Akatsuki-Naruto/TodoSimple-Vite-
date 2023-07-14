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
          5: "#1cc900",
          6: "#a8b2d1",
          7: "#8892b0",
          8: '#00ccff',
          9: '#202429b4',
          10:'#006d88',
          11:'#64ffda',
          12:'#4a9ae1',
          13:'#8b8e8f',
          14:'#555555',
          15:'#8b8e8f',
          16:'#0a182eb4',
          17:'#262020',
          18:'#00df9a',
          19:'#ccd6f6',
          20:'#64ffda',
          21:'#666969',
          22:'#112240',
          23:'#464647b5'
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
        15:'15',
        17:'17'
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
      boxShadow:{
        header:'0 10px 30px -10px rgb(38, 32, 32, 0.7)'
      },
      screens:{
        'm-md':{'max':'768px'},
        'md': '768px',
      }
    },
  },
  plugins: [],
};
