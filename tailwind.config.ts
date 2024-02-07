import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E6F0FF',
          100: '#BFDFFF',
          200: '#99CEFF',
          300: '#72BDFF',
          400: '#4CACFF',
          500: '#0064FF', // 기본 blue 컬러 재정의
          600: '#0059E6',
          700: '#004DBF',
          800: '#004099',
          900: '#003472',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
