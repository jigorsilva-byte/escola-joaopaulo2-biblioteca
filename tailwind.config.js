export default {
  content: ['./index.html', './index.tsx', './App.tsx', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#2c3e50',
        sidebarHover: '#34495e',
        primary: '#1abc9c',
        primaryDark: '#16a085',
        secondary: '#2980b9',
        danger: '#e74c3c',
        warning: '#f39c12',
      },
    },
  },
  plugins: [],
};
