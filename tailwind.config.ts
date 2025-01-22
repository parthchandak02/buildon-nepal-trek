import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./_posts/**/*.{md,mdx}",
  ],
  safelist: [
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'gap-6',
    'my-8',
    'text-center',
    'text-sm',
    'text-gray-600',
    'mt-2',
    'mb-8',
    'rounded-lg',
    'shadow-lg',
    'w-full',
    'h-auto',
    'object-cover'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': 'none',
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              fontSize: '3.5rem',
              lineHeight: '1.2',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1.5rem',
              color: '#1a202c',
            },
            h2: {
              fontSize: '2.25rem',
              lineHeight: '1.3',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: '#1a202c',
            },
            h3: {
              fontSize: '1.875rem',
              lineHeight: '1.4',
              fontWeight: '500',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              color: '#1a202c',
            },
            h4: {
              fontSize: '1.5rem',
              lineHeight: '1.5',
              fontWeight: '500',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              color: '#1a202c',
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              margin: '2rem auto',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
