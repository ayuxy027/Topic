// Config FileSystem, do not change

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue color
        customBlue: "#13547a",
        // Cyan light
        customGreen: "#80d0c7",
        // Cyan dark
        buttonColor: "#7fffd4",
        // Dark blue
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
