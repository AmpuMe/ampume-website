/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          white: '#FFFFFF',
          offwhite: '#F5F5F5',
          gold: '#C6A87C' // Extracted from reference button/accents
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // Hunter uses a very clean grotesque
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
