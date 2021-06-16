module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        leonardo: "url('/img/leonardo.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
