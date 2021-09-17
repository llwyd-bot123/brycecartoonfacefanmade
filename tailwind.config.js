module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': {'min': '240px', 'max': '639px'},

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      margin: {
        '54': '13.5rem',
       },
      borderRadius: {
        'face': '70% 70% 100% 100%',
        '100': '100%',
        'nega4' : '-4rem',
        '40%' : '40%',
        'facebg' : '60% 40% 50% 30%',
      },
      spacing: {
        '20.5': '5.5rem',
        '23': '5.5rem',
        '18' : '4.5rem',
        '9.8' : '2.35rem',
        '97' : '26rem',
        '85' : '22rem',
        '90' : '23rem',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'skin' : '#be9279',
      'beard' : '#1b1e2e',
      'bgface' : '#adc178',
     }),
     borderColor: theme => ({
      ...theme('colors'),
      'beard' : '#1b1e2e',
     }),
     gradientColorStops: theme => ({
      ...theme('colors'),
      'beard' : '#1b1e2e'
     }),
     zIndex: {
      'nega1': '-1',
     },
     borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
     '16' : '16px',
     '20' : '20px',
     '24' : '24px'
    },
    animation: {
      'ping-slow': 'ping 4s cubic-bezier(0, 0, 0, 1) infinite',
     },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'active'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
