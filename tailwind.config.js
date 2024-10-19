/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/**/*.{html,js,vue}",
    "./course/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        'widescreen': {
          'raw': '(min-aspect-radio: 3/2)'
        },
        'tallscreen': {
          'raw': '(max-aspect-radio: 1/2)'
        },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

