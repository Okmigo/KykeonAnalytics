/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C5CFF',
          50: '#F3EEFF',
          100: '#E3D9FF',
          200: '#C1AEFF',
          300: '#A085FF',
          400: '#8966FF',
          500: '#7C5CFF',
          600: '#5B42D6',
          700: '#4630AA',
          800: '#2F1F7A',
          900: '#1C134D',
        },
        ocean: '#00D1FF',
        jade: '#33FFC1',
        ember: '#FF6F61',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(124, 92, 255, 0.35)',
        'card': '0 24px 60px -20px rgba(12, 19, 31, 0.65)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      backgroundImage: {
        'mesh':
          'radial-gradient(circle at 20% 20%, rgba(124, 92, 255, 0.22), transparent 35%),' +
          'radial-gradient(circle at 80% 0%, rgba(0, 209, 255, 0.18), transparent 45%),' +
          'radial-gradient(circle at 20% 80%, rgba(51, 255, 193, 0.12), transparent 40%)',
        'grid': 'linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      transitionTimingFunction: {
        'soft-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.5s linear infinite',
        glow: 'glow 4s ease-in-out infinite',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
