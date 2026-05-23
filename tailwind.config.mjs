/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', '"SF Mono"', 'monospace'],
      },
      colors: {
        apple: {
          black: '#1D1D1F',
          gray: '#6E6E73',
          light: '#F5F5F7',
          muted: '#86868B',
        },
        orange: {
          DEFAULT: '#FF6B00',
          light: '#FF9A3C',
        },
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #FF6B00, #FF9A3C)',
      },
    },
  },
  plugins: [],
};
