/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"PP Neue Montreal"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        primary: '#64C700',
        darkGray: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
