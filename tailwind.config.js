/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       boxShadow:{
        'shadow-1': '0px 1px 8px 0px rgba(19, 40, 56, 0.08)',
        'shadow-2': '0px 0px 12px 0px rgba(16, 38, 73, 0.06)',
       }
      ,
      colors:{
        "grey1":"#0F1629",
        "grey2":"#3E424A",
        "green1":"#0FBA83",
      },
      gridTemplateColumns:{
        'footer':'repeat(auto-fit,minmax(220px,1fr))',
        'footer-mobile':'repeat(auto-fit,minmax(150px,1fr))',

      },
      screens:{
        'sm-2':'400px',
        "xl":"1300px",
        'lg-2':"1200px",

      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}