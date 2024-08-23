import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx, mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#d60c3e',
      secondary: '#161515',
      'secondary-75': '#2b2a2a',
      gray: '#33292b',
      white: '#fff',
      black: '#212121',
    },
    fontFamily: {
      primary: ['Styrene', 'sans-serif'],
      secondary: ['Thunder Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
export default config
