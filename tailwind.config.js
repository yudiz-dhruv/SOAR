module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#24272B'
      }
    },
    screens: {
      '3xl': '3000px',
      '3lg': { max: '1900px' },
      // => @media (max-width: 1900px) { ... }
      '2lg': { max: '1300px' },
      // => @media (max-width: 1300px) { ... }

      '2xl': { max: '3840px' },
      // => @media (max-width: 1535px) { ... }
      xl: { max: '1722px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: []
}
