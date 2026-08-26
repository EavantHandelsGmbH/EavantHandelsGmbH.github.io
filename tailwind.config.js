/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // EAVANT navy (from logo) + electric route-blue accent
        navy: {
          950: '#0b1220',
          900: '#0f1a2e',
          850: '#14203a',
          800: '#1c2b47',
          700: '#273a5c',
          600: '#35507a',
          500: '#243249', // brand navy
        },
        route: {
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
        },
        sky: {
          bright: '#22d3ee',
        },
        mist: '#f4f6fa',
        cloud: '#eef1f6',
        line: '#e2e7f0',
        ink: '#0f1a2e',
        slate: {
          body: '#475569',
          muted: '#64748b',
        },
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        ar: ['"IBM Plex Sans Arabic"', 'Tahoma', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 10px 40px -18px rgba(15, 26, 46, 0.25)',
        card: '0 4px 24px -8px rgba(15, 26, 46, 0.12)',
        lift: '0 24px 60px -24px rgba(37, 99, 235, 0.35)',
      },
      keyframes: {
        driftX: {
          '0%': { transform: 'translateX(-6%)' },
          '100%': { transform: 'translateX(6%)' },
        },
        dash: {
          to: { strokeDashoffset: '-1000' },
        },
        pulseDot: {
          '0%,100%': { opacity: '0.4', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
      },
      animation: {
        dash: 'dash 24s linear infinite',
        pulseDot: 'pulseDot 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
