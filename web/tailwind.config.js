/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support by adding the 'dark' class
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark":'#686D76',
        gray: {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
          400: '#98a2b3',
          500: '#667085',
          600: '#344054',
          700: '#1d2939', // Light mode darker gray for background
          800: '#101828', // Light mode dark text
          900: '#0f172a', // Dark mode text
        },
        backgroundColor: {
          'page-light': '#ffffff', // Light mode background
          'page-dark': '#686D76',  // Dark mode background (black)
        },
        blue: { // Using the name "blue" but with green shades
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Main green color
          600: '#16a34a',
          700: '#15803d',
          800: '#064e3b',  // Darker green for dark mode
          900: '#064e3b',  // Darkest green for more contrast
        },
        primary: {
          25: '#f3f9e8',   // Lightest green
          50: '#d6f5b3',
          100: '#b3f084',
          200: '#8fd14f',  // Main primary green
          300: '#78b944',
          400: '#609c3c',
          500: '#4b8230',
          600: '#3f6e28',
          700: '#335724',
          800: '#2a4620',
          900: '#1f3a1b',  // Darker green for contrast
        },
        green: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          800: '#064e3b', // Darker green for dark mode
        },
        yellow: {
          100: '#FDF6B2',
          800: '#854d0e', // Darker yellow for dark mode
        },
        purple: {
          50: '#ede9fe',
          200: '#c4b5fd',
          800: '#4c1d95', // Darker purple for dark mode
        },
        indigo: {
          25: '#F5F8FF',
          50: '#EEF4FF',
          100: '#E0EAFF',
          300: '#A4BCFD',
          400: '#8098F9',
          600: '#4f46e5', // Darker indigo for dark mode
          800: '#312e81', // Dark mode background for indigo
        },
      },
    
      screens: {
        mobile: '100px',
        tablet: '640px',
        pc: '769px',
      },
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        'md': '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
        'lg': '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        'xl': '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      },
      opacity: {
        2: '0.02',
        8: '0.08',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // darkMode: 'class', // Ensure dark mode is controlled via the 'class' strategy
  // plugins: [],
};
