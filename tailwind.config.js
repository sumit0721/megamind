/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1E3D',
        accent: '#2563EB',
        bg: '#F8FAFC',
        ink: '#0F172A',
        muted: '#CBD5E1',
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
