/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      black:'#242426',
      white:'#ffffff',
      gray:"rgb(229, 217, 217)",
      lightgray:"rgba(229, 217, 217,0.5)",
      superlightgray:"#f2f1ee",
      navgray:"rgb(248, 248, 248)"
    },
    extend: {},
  },
  plugins: [],
}