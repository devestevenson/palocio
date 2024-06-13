/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pBlue: "#0026E0",
        pWhite: "#FFFFFF",
        pSmoke: "#F0F0F0",
        pGray: "#707070",
        pBlack: "#0F0F0F",
      }
    },
  },
  plugins: [],
}
