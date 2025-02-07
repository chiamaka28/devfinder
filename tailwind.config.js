/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlueBg: '#00254d',
        darkBlueEl: ' #003166',
        blue: '#3F5FDF',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
