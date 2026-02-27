/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Бөгжнүүдийг хазайлгах 3D rotate тохиргоо
      rotate: {
        'y-25': '25deg',
        'y-minus-25': '-25deg',
      }
    },
  },
  plugins: [],
}