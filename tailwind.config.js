/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0,0,0,0.5)",
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.5)",
        lg: "4px 4px 8px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const shadows = theme("textShadow");
      Object.keys(shadows).forEach((key) => {
        const className =
          key === "DEFAULT" ? "text-shadow" : `text-shadow-${key}`;
        newUtilities[`.${className}`] = { textShadow: shadows[key] };
      });
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
