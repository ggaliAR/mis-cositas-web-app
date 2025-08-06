import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FADADD',
        'baby-blue': '#CDEBF9',
        'light-vanilla': '#FFF3C2',
        'soft-lavender': '#E6E6FA',
        'mint-green': '#D4F5E9',
        'pure-white': '#FFFFFF',
        'light-warm-grey': '#F5F5F5',
      },
      fontFamily: {
        'quicksand': ['var(--font-quicksand)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(250, 218, 221, 0.4)',
        'soft-lg': '0 6px 20px rgba(250, 218, 221, 0.6)',
      },
    },
  },
  plugins: [],
}

export default config
