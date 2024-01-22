import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#171721',
        'panelBgColor': '#242431',
        'borderColor': '#414652'
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}

