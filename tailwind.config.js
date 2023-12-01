/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["night", "coffee", "cupcake"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

