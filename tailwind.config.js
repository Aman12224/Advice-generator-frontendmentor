/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      "3xl": ["1.5rem", "2rem"],
      "4xl": ["1.8rem", "2.4rem"],
    },
    extend: {
      colors: {
        "parimary-Light-Cyan": "hsl(193, 38%, 86%)",
        "primary-Neon-Green": "hsl(150, 100%, 66%)",

        "neutral-Grayish-Blue": "hsl(217, 19%, 38%)",
        "neutral-Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "neutral-Dark-Blue": "hsl(218, 23%, 16%)",
      },
      boxShadow: {
        "neon-shadow": "0 0 20px 18px hsl(150, 100%, 66%,.3)",
      },
    },
  },
  plugins: [],
};
