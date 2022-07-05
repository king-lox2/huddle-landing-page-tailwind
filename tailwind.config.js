module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
   
    extend: {
    colors: {
    pink1: 'hsl(322, 100%, 66%)',
    lightPink: 'hsl(321, 100%, 78%)',
    lightRed: 'hsl(0, 100%, 63%)', 
    veryLightGray: 'hsl(0, 0%, 98%)',
    darkGrayishBlue: 'hsl(227, 12%, 61%)',
    veryDarkCyan: 'hsl(192, 100%, 9%)',
    veryPaleBlue: 'hsl(207, 100%, 98%)',
    },
    
    fontFamily: {
     body: ['Open Sans', 'sans-serif'],
     typo: [ 'Poppins', 'sans-serif']
      
    } 
      
      
      
      
    },
  },
  plugins: [],
}
   