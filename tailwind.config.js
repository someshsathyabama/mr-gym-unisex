/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          bg: "#0a0a0c",
          surface: "#121216",
          card: "#18181e",
          border: "#262630",
          red: {
            DEFAULT: "#e50914",
            bright: "#ff2e2e",
            dark: "#b20710",
            glow: "rgba(229, 9, 20, 0.35)",
          },
          gold: "#f59e0b",
          muted: "#9ca3af",
          light: "#f3f4f6"
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Montserrat"', '"Oswald"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
