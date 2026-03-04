/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffcf0',
          100: '#fef5d6',
          200: '#fde6ad',
          300: '#fbd17a',
          400: '#f9b64b',
          500: '#f59121',
          600: '#d97116',
          700: '#b45314',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        premium: {
          dark: '#0a0a0a',
          gold: '#C5A059',
          cream: '#F9F6F0',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'glow': 'glow 2s infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(197, 160, 89, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(197, 160, 89, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
