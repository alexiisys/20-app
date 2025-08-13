const colors = require('./src/components/ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto-200': ['Roboto_200ExtraLight'],
        'roboto-300': ['Roboto-300Light'],
        'roboto-400': ['Roboto-400Regular'],
        'roboto-500': ['Roboto_500Medium'],
        'roboto-600': ['Roboto_600SemiBold'],
        'roboto-700': ['Roboto-700Bold'],
        'roboto-800': ['Roboto_800ExtraBold'],
        'roboto-900': ['Roboto-900Black'],
        roboto: ['Roboto_500Medium'],
      },
      colors,
    },
  },
  plugins: [],
};
