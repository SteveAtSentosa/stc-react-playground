const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          '100': colors.blue['700'],
          '200': colors.blue['900'],
        },
        'secondary': colors.blue['500'],
        'primary-text': colors.zinc['700'],
        'secondary-text': colors.gray['500'],
      },
      screens: {
        'xs': '375px', // min-width
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-invert-body)',
            '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
            '--tw-prose-links': 'var(--tw-prose-invert-links)',
            '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
            '--tw-prose-underline': 'var(--tw-prose-invert-underline)',
            '--tw-prose-underline-hover': 'var(--tw-prose-invert-underline-hover)',
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.primary-text'),
            '--tw-prose-headings': theme('colors.primary-text'),
            '--tw-prose-links': theme('colors.primary-text'),
            '--tw-prose-links-hover': theme('colors.secondary-text'),
            '--tw-prose-underline': theme('colors.primary-text / 0.2'),
            '--tw-prose-underline-hover': theme('colors.secondary-text'),
            
            '--tw-prose-invert-body': theme('colors.secondary-text'),
            '--tw-prose-invert-headings': theme('colors.secondary-text'),
            '--tw-prose-invert-links': theme('colors.primary.100'),
            '--tw-prose-invert-links-hover': theme('colors.primary.200'),
            '--tw-prose-invert-underline': theme('colors.primary.100'),
            '--tw-prose-invert-underline-hover': theme('colors.primary.200'),
  
            a: {
              color: 'var(--tw-prose-links)',
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'underline',
              textDecorationColor: 'var(--tw-prose-underline)',
              transitionProperty: 'color, text-decoration-color',
              transitionDuration: theme('transitionDuration.150'),
              transitionTimingFunction: theme('transitionTimingFunction.in-out'),
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
                textDecorationColor: 'var(--tw-prose-underline-hover)',
              }
            },
            h1: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '800',
              marginBottom: theme('spacing.2'),
            },
            h2: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
}
