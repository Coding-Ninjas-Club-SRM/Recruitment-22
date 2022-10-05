const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingbg: "url('/src/Components/Landing/assets/background.png')",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono"],
        audiowide: ["Audiowide"],
      },
    },
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
