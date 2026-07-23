import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#53B93F",
          dark: "#2E7D32",
          darker: "#1B5E20",
          light: "#A5D6A7",
        },
        bgGreen: "#E8F5E9",
        secondary: {
          DEFAULT: "#1E6AA8",
        },
        background: "#F7F8FA",
        surface: "#FFFFFF",
        textMain: "#222222",
      },
      fontFamily: {
        heading: ["var(--font-merriweather)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.1)",
        md: "0 4px 12px rgba(0,0,0,0.15)",
        lg: "0 8px 24px rgba(0,0,0,0.12)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
      },
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        ultrawide: "1600px",
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
      },
    },
  },
  plugins: [],
};

export default config;
