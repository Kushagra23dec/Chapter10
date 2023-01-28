/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        shhimmer: "shimmer 1s ease-in-out infinite"
      },
      keyframes:{ 
      shimmer: {
        "0%": {
            "background-position": "-208px 0"
        },
        "100%": {
            "background-position": "208px 0"
        }
    }
  }
    
    },
  },
  plugins: [],
};
