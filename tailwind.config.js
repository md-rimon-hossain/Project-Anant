/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: ["Fontdiner Swanky", "cursive"],
        exo: ["'Exo 2'", 'sans-serif'],
        // lemonada: ["Fontdiner Swanky", "cursive"],
        // jakarta: ['"Fontdiner Swanky"', "sans-serif"],
        // permanent: ['"Fontdiner Swanky"', 'cursive'],
        // shadows: [
        //   "Mystery Quest", "cursive"
        // ],
      }
    }
  },
  plugins: []
};
