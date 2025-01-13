/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#EBF4FF',
            100: '#C3DAFE',
            200: '#A4CAFE',
            300: '#78A9FD',
            400: '#4786FC',
            500: '#1D63FB',
            600: '#202452', // Main logo color
            700: '#1A2038',  
            800: '#13192B',
            900: '#0C121F',
            950: '#050813',
          },
          secondary: {
            50: '#FFF7ED',
            100: '#FFEFD5',
            200: '#FED7AC',
            300: '#FDBE83',
            400: '#FCAA5A',
            500: '#F99631',
            600: '#DAB212', // Secondary logo color
            700: '#B78A0E',
            800: '#936B0A',
            900: '#704C06',
            950: '#4C2F03',
          },
        },
      },
    },
  plugins: [],
}

