/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "566px",
        md: "667px",
        mdl: "768px",
        lg: "1023px",
        lgl: "1024px",
        xl: "1200px",
        maxW: "1240px",
      },
      colors: {
        qatar_pink: "#9F1A65",
        qatar_body: "#FFFFFF",
        qatar_button: "#D33C57",
        qatar_border: "#DADADA",
        qatar_light: "#FAFAFA",
        qatar_yellow: "#FACC09",
        qatar_green: "#479E6D",
        qatar_blue: "#5a73ad",
        qatar_dark_bg: "#efedf1",
        qatar_orange: "#DF790E",
        qatar_light_yellow: "#c39838",
        qatar_brown: "#544B49",
        lighttext: "#393635",
        boldtext: "#6a6a6a",
        qatar_skyblue: "rgb(3, 169, 244)"
      },
      fontFamily: {
        bodyFont: ['Libre Franklin', "sans-serif"],
      },
    },
  },
  plugins: [],
}
