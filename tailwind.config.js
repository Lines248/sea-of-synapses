/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slowPulse: "slowPulse 6s ease-in-out infinite",
        slowDrift: "slowDrift 25s linear infinite",
        synapsePulse: "synapsePulse 4.5s ease-in-out infinite",
      },
      keyframes: {
        slowPulse: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "100%": { opacity: "1" },
        },
        slowDrift: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-60px, -40px)" },
        },
        synapsePulse: {
          "0%": { strokeDashoffset: "0", opacity: "0.15" },
          "50%": { strokeDashoffset: "-12", opacity: "0.9" },
          "100%": { strokeDashoffset: "-24", opacity: "0.15" },
        },
      },
    },
  },
  plugins: [],
};