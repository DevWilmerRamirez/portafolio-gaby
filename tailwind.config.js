/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#6B1A2A',
          dark: '#4A1020',
          light: '#8C2238',
        },
        pink: {
          DEFAULT: '#E8A0A8',
          light: '#F5D5D9',
          bg: '#FBF0F1',
        },
        cream: '#FDF7F0',
        text: {
          DEFAULT: '#2A0A12',
          medium: '#7A3040',
          light: '#B06070',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'clamp-h1': 'clamp(2.4rem, 4.5vw, 3.8rem)',
        'clamp-title': 'clamp(1.8rem, 3vw, 2.8rem)',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
      },
    },
  plugins: [],
}
