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
      colors:{
        "primary":"#1f2327",
        "secondary":"#1e2022",
        "t-primary":"#9ba2a9",
        "t-secondary":"#171717"
      },
      boxShadow:{
        "normal":"0 0px 10px 5px rgba(0, 0, 0, 0.4)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
