import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './app/components/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CA8A04',
      },
      textOpacity: {
        78: '0.78',
        72: '0.72',
      },
      blur: {
        '20': '20px',
      },
    },
  },
};

export default config;
