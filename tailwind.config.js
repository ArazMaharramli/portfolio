/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif']
      },
      colors: {
        ink: {
          50: '#f8f8fa',
          100: '#e2e4ea',
          200: '#d2d4dc',
          300: '#b3b5be',
          400: '#83858f',
          500: '#686a75',
          600: '#4a4c57',
          700: '#32343d',
          800: '#202127',
          900: '#14151a',
          950: '#0c0d10'
        },
        paper: {
          DEFAULT: '#f3f4f7',
          100: '#eceef2'
        },
        accent: {
          50: '#f7f5ff',
          100: '#f1effd',
          200: '#ece9fb',
          300: '#c9c2f5',
          400: '#968be9',
          500: '#6c5ce7',
          600: '#5d4bd7',
          700: '#4b3cb5',
          800: '#392d8e',
          900: '#2a216d'
        },
        teal: {
          50: '#fff0f6',
          100: '#ffe1ec',
          200: '#ffc5da',
          300: '#ff9fc1',
          400: '#ff81b1',
          500: '#ff6fa8',
          600: '#e8558d',
          700: '#c63b70',
          800: '#9f2c59',
          900: '#76213f'
        }
      },
      maxWidth: {
        content: '72rem'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-2%, 3%) scale(1.05)' }
        }
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        blob: 'blob 14s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
