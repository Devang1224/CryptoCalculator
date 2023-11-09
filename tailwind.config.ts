import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      gridTemplateColumns:{
        'footer':'repeat(auto-fit,minmax(220px,1fr))',
        'footer-mobile':'repeat(auto-fit,minmax(150px,1fr))',

      },
      screens:{
        'sm-2':'400px',
      }
    },
  },
  plugins: [],
}
export default config
