/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        darkblue: {
          DEFAULT: "#0D0D2B",
          secondary: "#252540",
        },
        blue: {
          DEFAULT: "#3671E9",
          hover: "#2766E6",
        },
        gray: {
          DEFAULT: "#E0E0E0",
        },
        violet: "#2B076E",
        white: "#ffffff",
      },
      fontFamily: {
        primary: "Rubik",
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        primary: "0px 20px 200px rgba(57, 23, 119, 0.05)",
      },
      /*backgroundImage: {
        newsletter: "url('/src/assets/img/newsletter-bg.png')",
        newsletterBox: "url('/src/assets/img/newsletter-box.png')",
      },*/
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    /*
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    
    
    */
  },
  plugins: [],
};
