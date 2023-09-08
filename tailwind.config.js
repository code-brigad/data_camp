/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        pinkwish: "#a3216a"
      },
      fontFamily: {
        black: 'MavenPro-Black, sans-serif',
        extrabol: 'MavenPro-ExtraBold, sans-serif',
        bold: 'MavenPro-Bold, sans-serif',
        semibold: 'MavenPro-SemiBold, sans-serif',
        medium: 'MavenPro-Medium, sans-serif',
        regular: 'MavenPro-Regular, sans-serif'
      }
    },
  },
  plugins: [],
}

