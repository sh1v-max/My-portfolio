/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['font-mova'],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ['Amsterdam', 'sans-serif'],
        arenq: ['Arenq', 'sans-serif'],
        beckman: ['Beckman', 'sans-serif'],
        cinderela: ['Cinderela', 'sans-serif'],
        countryside: ['Countryside', 'sans-serif'],
        countrysideItalic: ['Countryside Italic', 'sans-serif'],
        darlington: ['Darlington', 'sans-serif'],
        halimun: ['Halimun', 'sans-serif'],
        migae: ['Migae', 'sans-serif'],
        mova: ['Mova', 'sans-serif'],
        overcame: ['Overcame', 'sans-serif'],
        overcameOutline: ['Overcame Outline', 'sans-serif'],
        lukyfiend: ['Lukyfiend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
