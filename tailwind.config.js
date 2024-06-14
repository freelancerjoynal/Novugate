/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "lime-green": "#243c5a",
        "gray-aspargus": "#3A5548",
        "jungle-green": "#24725F",
        charcoal: "#23252A",
        "gun-mental": "#4F5155",
        emerald: "#51CC47",
      },
    },
  },
  plugins: [require("daisyui")],
};
