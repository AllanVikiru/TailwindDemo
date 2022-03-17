module.exports = {
  content: [],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif'],
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#2563eb',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
  purge:{
    enabled: true,
    content:[
      './**/*.html'
    ]
  } // reduce size of output.css by purging unused CSS classes
}
