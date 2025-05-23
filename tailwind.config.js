/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0a0a0f',
        'neon-pink': '#ff2b6d',
        'neon-violet': '#aa00ff',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'mono': ['monospace'],
      },
      animation: {
        'flicker': 'flicker 2s linear infinite',
        'scan': 'scan 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite',
        'type': 'type 3.5s steps(30, end)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        type: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}