module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        'blue-cyan': '#7d5fff',
        'purple-gr': '#AEBAF8',
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#7d5fff',
        secondary: '#ffaf40',
        danger: '#ED4C67',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
