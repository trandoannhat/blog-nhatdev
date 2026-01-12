import type { Config } from "tailwindcss";

const config: Config = {
  // Kích hoạt Dark Mode dựa trên class "dark" ở thẻ html
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      // Bạn có thể thêm các màu sắc tùy chỉnh cho Dark Mode ở đây
      colors: {
        darkBg: "#0f172a", // Màu xanh đen Slate-900 chuyên nghiệp
        darkCard: "#1e293b", // Màu Slate-800 cho các thẻ Card
      },
    },
  },
  plugins: [],
};

export default config;
