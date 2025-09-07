/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        'dark-bg': '#0d0d0d',
        'header-bg': '#1a1a1a',
        'primary-dark': '#400016',
        'primary-light': '#990f3d',
        'text': '#f3f3f3',
        'muted-text': '#a3a3a3',
        // Light mode colors
        'light-bg': '#fefefe',
        'light-text': '#222',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};