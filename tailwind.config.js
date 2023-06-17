/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#760509",
        secondary: "#FF9700A6",
        dashboard_bg: "#f5f4f9",
      },
    },
  },
  plugins: [],
};
