import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], //Placed the daisyui inside of the [] to import the module
  daisyui: {
    themes: ["forest"], //importing the theme that we will be using for our application
  },
};