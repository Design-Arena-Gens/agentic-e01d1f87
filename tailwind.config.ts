import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1D4ED8",
          dark: "#1E3A8A",
          light: "#60A5FA",
        },
        accent: "#F97316",
      },
    },
  },
  plugins: [],
};

export default config;
