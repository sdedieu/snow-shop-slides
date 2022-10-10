module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'laptop': "url('/src/assets/laptop-background.png')",
        'background': "url('/src/assets/background.png')",
        'thanks': "url('/src/assets/thanks.png')",
        'selfie': "url('/src/assets/selfie.jpg')",
        'bundleyourscript': "url('/src/assets/bundle-your-script.png')",
        'closedbox': "url('/src/assets/closed-box.png')"
      },
      colors: {
        'devoxx-green': '#236148',
        'devoxx-yellow': '#f0b129',
        'devoxx-cyan': '#1dbfbf',
        'devoxx-purple': '#49384d',
        'devoxx-orange': '#eb8038',
        'kzn-blue': '#00c7ff',
        'kzn-cyan': '#29ccd9',
        'kzn-teal': '#52d4b3',
        'kzn-green': '#7ad98c',
        'kzn-apple': '#a3de66',
      }, 
      spacing: {
        '25/2': '8%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
      }
    },
  },
  plugins: [],
}