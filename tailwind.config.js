/** @type {import('tailwindcss').Config} */

module.exports = {
  important:true,
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors:{
      'green': '#224B0C',
      'light-green': '#C1D5A4',
      'brown': '#AC4425',
      'white': '#FAFAFA',
      'trans': 'transparent',
    },
    extend: {},
  },
  plugins: [],
}