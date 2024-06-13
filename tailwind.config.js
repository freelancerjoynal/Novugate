/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "lime-green": "#243c5a",
        "gray-aspargus": "#3A5548",
        "myrtle-green": "#3A5548",
        "gun-mental": "#4F5155",
        emerald: "#51CC47",
      },
    },
  },
  plugins: [require("daisyui")],
};
