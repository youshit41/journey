import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#090909",
        softblack: "#111111",
        ivory: "#F5F1EB",
        rosegold: "#D6BFA5",
        softpink: "#E7C7C2"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(214,191,165,0.25)"
      }
    }
  },
  plugins: []
};

export default config;
