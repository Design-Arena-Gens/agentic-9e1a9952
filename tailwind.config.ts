import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f9f5ed",
        midnight: "#1f1f29",
        accent: "#ff7b00",
        muted: "#d9d9e3"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        brutal: "6px 6px 0 0 rgba(0,0,0,0.85)"
      }
    }
  },
  plugins: []
};

export default config;
