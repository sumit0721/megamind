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
        'float-particle': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '50%': { transform: 'translateY(-80px) translateX(20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slow-pan': {
          '0%': { transform: 'scale(1.15) translate(0, 0)' },
          '25%': { transform: 'scale(1.18) translate(-1%, -1%)' },
          '50%': { transform: 'scale(1.2) translate(-0.5%, 0.5%)' },
          '75%': { transform: 'scale(1.18) translate(0.5%, -0.5%)' },
          '100%': { transform: 'scale(1.15) translate(0, 0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'float-particle': 'float-particle 14s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
        'slow-pan': 'slow-pan 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
