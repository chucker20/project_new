/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxg': '940px',
        'nav_b': '815px',
      },
      colors: {
        'bg-input': '#060e15'
      },
      fontSize: {
        'text-16': ['17px', '27px'],
      },
    },
  },
  plugins: [],
}

