/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF8',
          100: '#FBF7F2',
          200: '#F5EDE3',
          300: '#EFE3D2',
          400: '#E2D2BD',
        },
        rosewood: {
          50: '#FBF0EE',
          100: '#F3DDD8',
          200: '#E6BBAF',
          300: '#D29382',
          400: '#B56B57',
          500: '#9D4F3C',
          600: '#8B4B3F',
          700: '#6F3A30',
          800: '#5A2E26',
          900: '#42221D',
        },
        gold: {
          50: '#FBF6EC',
          100: '#F5EBD0',
          200: '#EBD5A0',
          300: '#DCBE70',
          400: '#C4A063',
          500: '#A98A4E',
          600: '#8A6F3D',
          700: '#6C5630',
        },
        blush: {
          100: '#F5E0E0',
          200: '#E8C5C5',
          300: '#DBB5B5',
          400: '#C99B9B',
        },
        charcoal: {
          700: '#3D3530',
          800: '#2B2522',
          900: '#1A1614',
        },
        taupe: {
          400: '#9B8E80',
          500: '#7A7068',
          600: '#5E554E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
