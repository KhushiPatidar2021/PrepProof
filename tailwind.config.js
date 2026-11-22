/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F3FF',
          100: '#ECE8FF',
          200: '#D9D2FE',
          300: '#C0B3FC',
          400: '#9E86FA',
          500: '#7C5CFC', // Specified Primary Color
          600: '#6A46EE',
          700: '#5733DC',
          800: '#4727B8',
          900: '#3A1E96',
          DEFAULT: '#7C5CFC',
        },
        lavender: {
          50: '#FAF9FF',
          100: '#F4F2FF',
          200: '#ECE8FE',
          300: '#DDD5FD',
          400: '#C4B5FD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out forwards',
      }
    },
  },
  plugins: [],
}
