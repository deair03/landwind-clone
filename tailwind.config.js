/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xs: '350px', // Custom XS breakpoint
        sm: '640px', // Default Tailwind value
        md: '768px', // Default Tailwind value
        lg: '1024px', // Default Tailwind value
        xl: '1280px', // Default Tailwind value
      },
    },

  },
  plugins: [],
}

