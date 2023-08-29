/** @type {import('tailwindcss').Config} */

const typographyConfig = {
  display: {
    100: { fontSize: '64px', lineHeight: '80px' },
    90: { fontSize: '56px', lineHeight: '64px' },
    80: { fontSize: '48px', lineHeight: '56px' },
    70: { fontSize: '32px', lineHeight: '48px' },
    60: { fontSize: '24px', lineHeight: '32px' },
  },
  title: {
    50: { fontSize: '20px', lineHeight: '32px' },
    40: { fontSize: '18px', lineHeight: '30px' },
    30: { fontSize: '16px', lineHeight: '26px' },
    20: { fontSize: '14px', lineHeight: '22px' },
    10: { fontSize: '12px', lineHeight: '20px' },
  },
  subtitle: {
    50: { fontSize: '20px', lineHeight: '32px' },
    40: { fontSize: '18px', lineHeight: '30px' },
    30: { fontSize: '16px', lineHeight: '26px' },
    20: { fontSize: '14px', lineHeight: '22px' },
    10: { fontSize: '12px', lineHeight: '20px' },
  },
  link: {
    50: { fontSize: '20px', lineHeight: '32px' },
    40: { fontSize: '18px', lineHeight: '30px' },
    30: { fontSize: '16px', lineHeight: '24px' },
    20: { fontSize: '14px', lineHeight: '24px' },
    10: { fontSize: '12px', lineHeight: '20px' },
  },
  body: {
    50: { fontSize: '20px', lineHeight: '32px' },
    40: { fontSize: '18px', lineHeight: '30px' },
    30: { fontSize: '16px', lineHeight: '26px' },
    20: { fontSize: '14px', lineHeight: '22px' },
    10: { fontSize: '12px', lineHeight: '20px' },
  },
  caption: {
    50: { fontSize: '20px', lineHeight: '32px' },
    40: { fontSize: '18px', lineHeight: '30px' },
    30: { fontSize: '16px', lineHeight: '26px' },
    20: { fontSize: '14px', lineHeight: '22px' },
    10: { fontSize: '12px', lineHeight: '20px' },
  },
  quote: {
    50: { fontSize: '20px', lineHeight: '32px' },
    40: { fontSize: '18px', lineHeight: '30px' },
    30: { fontSize: '16px', lineHeight: '26px' },
    20: { fontSize: '14px', lineHeight: '22px' },
    10: { fontSize: '12px', lineHeight: '20px' },
  },
};

module.exports = {
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
      colors: {
        brand: {
          950: '#04110F',
          900: '#07221F',
          800: '#0F4741',
          700: '#17695F',
          600: '#1F8F82',
          500: '#26B1A1',
          400: '#3ED6C4',
          300: '#6CDFD2',
          200: '#9EEAE1',
          100: '#CDF4F0',
          50: '#E6FAF7',
        },
      },
      // output -> {display-100:64, ...}
      fontSize: {
        ...Object.entries(typographyConfig).reduce((acc, [type, sizes]) => {
          for (const [key, { fontSize }] of Object.entries(sizes)) {
            acc[`${type}-${key}`] = fontSize;
          }
          return acc;
        }, {}),
      },
      // output -> {display-100:64, ...}
      lineHeight: {
        ...Object.entries(typographyConfig).reduce((acc, [type, sizes]) => {
          for (const [key, { lineHeight }] of Object.entries(sizes)) {
            acc[`${type}-${key}`] = lineHeight;
          }
          return acc;
        }, {}),
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
        light: '300',
        semibold: '600',
      },
      letterSpacing: {
        custom: '1px',
      },
    },
  },
  plugins: [],
};
