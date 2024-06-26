// Config FileSystem, do not change

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        // Blue color
        customBlue: "#13547a",
        //cyan light
        customGreen: "#80d0c7",
        // cyan dark
        buttonColor: "#7fffd4",
        //Dark blue
        buttonColorHover: "#13547a",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
