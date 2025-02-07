/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'whitish-blue': 'hsl(227, 100%, 98%)',
        blue: 'hsl(212, 100%, 50%)',
        'blue-2': 'hsl(212, 100%, 69%)',
        gray: 'hsl(217, 20%, 51%)',
        'gray-trans': 'hsla(217, 20%, 51%, 0.2)',
        'grayish-blue': 'hsl(217, 35%, 45%)',
        'dark-blue': 'hsl(217, 21%, 21%)',
        'navy-blue': 'hsl(222, 41%, 20%)',
        'navy-blue-2': 'hsl(222, 44%, 70%)',
        'dark-navy-blue': 'hsl(220, 40%, 13%)',
        'dark-navy-blue-2': 'hsl(220, 18%, 16%)',
        red: 'hsl(0, 91%, 62%)',
        moon: '#697C9A',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
