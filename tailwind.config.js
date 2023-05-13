/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens:{
       
      },
      
      fontFamily:{
         roboto: ['Roboto', 'sans-serif'],
        }
      }
    },
  
  plugins: [],
}

// screens: {
//   'xs':{"max":"296px"},
//   'sx': '480px',
//   'md':'800px'
// }