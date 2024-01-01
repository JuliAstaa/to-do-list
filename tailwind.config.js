/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "biru-kayaknya": "#213555",
      },
    },
  },
  plugins: [],
};
