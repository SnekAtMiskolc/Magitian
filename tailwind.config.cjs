/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'spcx-1000': '#FFFFFF',
        'spcx-900': '#0F1112',
        'spcx-800': '#171a1c',
        'spcx-700': '#22272a',
        'spcx-600': '#394247',
        'spcx-400': '#4f5c63',
        
        'blue-600': '#006cff',
        'blue-500': '#0fb5ee',
        'blue-400': '#00d3f9',
        'mythic-500': '#cc1111',
        'mythic-400': '#ff5251',
      }
    },
  },
  plugins: [],
}
