module.exports = {
 content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 2.25)', // Customize as needed
      },
      colors: {
        background: '#111111',
        foreground: '#1C1C1C',
        foregroundPts: '#2B2B2B',
        primary: '#00A3FF',
        secondary: '#151515',
        accent: '#FF9900',
        textPrimary: '#FFFFFF',
        textSecondary: '#AAAAAA',
        buttonBackground: '#007BFF',
        buttonHover: '#0056B3',
      },
    },
  },
  plugins: [],
};
