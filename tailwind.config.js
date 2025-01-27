// tailwind.config.js
module.exports = {
  darkMode: "class", // Use class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridAutoRows: {
        fr: "minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
