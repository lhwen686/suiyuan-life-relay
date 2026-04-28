/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marrow: {
          50: "#fff7f6",
          100: "#ffe6e4",
          200: "#ffc8c3",
          300: "#f69d95",
          400: "#e86259",
          500: "#c9342e",
          600: "#a51f1d",
          700: "#811a1b",
          800: "#63191a",
          900: "#441112",
          950: "#2f0c0d"
        },
        pulse: {
          100: "#fff4df",
          300: "#f5c76e",
          500: "#d9941f"
        },
        clinic: {
          50: "#effaf7",
          100: "#d7f1eb",
          200: "#a9ddd1",
          700: "#197064",
          800: "#12564e"
        }
      },
      boxShadow: {
        soft: "0 18px 48px rgba(68, 17, 18, 0.12)",
        card: "0 12px 30px rgba(99, 25, 26, 0.08)",
        lift: "0 22px 60px rgba(47, 12, 13, 0.16)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans SC",
          "Microsoft YaHei",
          "PingFang SC",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
