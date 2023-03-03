/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f2b49',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
    variants: {
      extend: {
        visibility: ['group-hover'],
      },
    },
    plugins: [],
  },
};
