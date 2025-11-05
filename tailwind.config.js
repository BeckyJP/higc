/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"PP Neue Montreal"'],
        inter: ['Inter'],
        mono: ['"DM Mono"'],
      },
      colors: {
        primary: '#64C700',
        darkGray: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
