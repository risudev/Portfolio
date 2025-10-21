/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            opacity: '0.6',
            boxShadow: '0 0 10px #8245ec, 0 0 30px #a855f7',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 20px #a855f7, 0 0 60px #8245ec',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      blob: {
        '0%': { transform: 'scale(1)' },
        '33%': { transform: 'scale(1.2)' },
        '66%': { transform: 'scale(0.8)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      borderGlow: 'glow 3s ease-in-out infinite',
      pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      blob: 'blob 10s infinite',
      float: 'float 2s ease-in-out infinite',
    },
    backgroundImage: {
      'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
    },

  },

  plugins: [],
}
