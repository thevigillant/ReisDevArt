/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-primary": "hsl(var(--brand-primary-h), var(--brand-primary-s), var(--brand-primary-l))",
        "brand-accent": "hsl(var(--brand-accent-h), var(--brand-accent-s), var(--brand-accent-l))",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
        "surface-glass": "var(--surface-glass)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-dim": "var(--border-dim)",
        "border-highlight": "var(--border-highlight)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "gradient-x": "gradient-x 3s ease infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px -5px var(--brand-primary)" },
          to: { boxShadow: "0 0 20px 5px var(--brand-primary)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
}

