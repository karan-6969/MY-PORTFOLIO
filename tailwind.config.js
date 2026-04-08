/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        textMain: 'var(--color-primary-text)',
        textMuted: 'var(--color-secondary-text)',
        rmBlue: 'var(--color-blue)',
        rmYellow: 'var(--color-yellow)',
        rmOrange: 'var(--color-orange)',
        rmPurple: 'var(--color-purple)',
        surface: 'var(--color-surface)',
        darkTerminal: 'var(--color-terminal)',
        codeMuted: 'var(--color-code-text)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scrolldown: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' }
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marqueeRight: 'marqueeRight 30s linear infinite',
        scrolldown: 'scrolldown 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
