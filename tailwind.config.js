const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#319795',
      secondary: '#3182ce',
    },
    'object-fit': 'fit',
  },

  plugins: [],
}
