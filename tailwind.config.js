/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        // Warm graphite ink + copper/steel accents — grounded in the
        // subject matter (machinery, physics simulation) rather than a
        // generic dark-mode-plus-bright-accent template.
        graphite: {
          50: "#F3F2EF",
          100: "#E7E5E0",
          300: "#B9B6AE",
          500: "#6E6B63",
          700: "#383631",
          800: "#232219",
          900: "#17161B",
        },
        copper: {
          100: "#F4DCC4",
          300: "#E3AE79",
          500: "#C9793C",
          600: "#AD6530",
        },
        arc: {
          400: "#7FA6E8",
          500: "#5B8DEF",
        },
        concrete: "#EDECE8",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
