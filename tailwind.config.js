/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "85v": "85vh",
      },
    },
  },
  plugins: [],
};
