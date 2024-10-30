module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: '#5b21b6', // Dark purple for headers/buttons
        brandOrange: '#ff8c00', // Orange for highlights
        lightGray: '#f2f2f2', // Light gray background color
      },
      backgroundImage: {
        'gradient-to-r-custom': 'linear-gradient(to right, #f9d423, #ff4e50)', // Adjust based on image gradient
      },
    },
  },
  plugins: [],
}
