module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-kine': "#0F31AF",
        'gray': "#383C43",
        'light-gray' : "#787F86",
        'orange-kine' : "#EA5F14",
        'jaune-kine' : "#FFD600",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
