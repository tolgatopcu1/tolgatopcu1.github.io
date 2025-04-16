/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f1a',
        purpleAccent: '#7f5af0',
      },
      keyframes: {
        'border-snake': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      fontFamily: {
        dmMono: ['DM Mono', 'monospace'],
        montserrat: ['"Montserrat Alternates"', 'sans-serif'],
        kronaOne: ['Krona One', 'sans-serif'],
      },      
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'border-snake': 'border-snake 3s linear infinite',
      },
    },
  },
  plugins: [],
}
