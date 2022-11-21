/** @type {import('tailwindcss').Config} */
module.exports = {
  positiveChange: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        lg2: "1px 1px 5px #999",
      },
    },
  },
  plugins: [],
};
