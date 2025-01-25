/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#32a885',
        secondary: '#6c757d',
        light: '#ffffff',
        dark: '#343a40',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'mono': ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      animation: {
        'action': 'action 1s infinite alternate',
      },
      keyframes: {
        action: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}