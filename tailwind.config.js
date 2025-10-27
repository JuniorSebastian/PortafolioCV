/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
        xl: '4rem'
      },
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        midnight: '#0f172a',
        accent: '#f97316',
        ivory: '#f8fafc'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(249,115,22,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(15,23,42,0.4), transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(15,23,42,0.92), rgba(15,23,42,0.75))'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(15, 23, 42, 0.35)',
        glow: '0 0 0 1px rgba(248, 250, 252, 0.12), 0 24px 60px -30px rgba(15, 23, 42, 0.45)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' }
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: 0.45 },
          '80%, 100%': { transform: 'scale(1.35)', opacity: 0 }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 600ms ease forwards',
        pulseRing: 'pulseRing 2.8s ease-out infinite'
      }
    }
  },
  plugins: []
}

