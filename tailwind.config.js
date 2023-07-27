/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'blur': 'blur(12px)',
      },
      colors: {
        'bgdark':'#171717',
        'main1' : '#14FFEC',
      }
    },
  },
  plugins: [],
}

