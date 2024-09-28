/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "reverse-spin 10s linear infinite", // Custom spin duration
      },
      keyframes: {
        "reverse-spin": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      fontFamily: {
        BonaroOutline: ["BonaroOutline", "sans-serif"], // Replace 'custom' with a name of your choice
        BungeeOutline: ["BungeeOutline", "sans-serif"],
        WardrumBoldOutline: ["WardrumBoldOutline", "sans-serif"],
        WardrumBold: ["WardrumBold", "sans-serif"],
        WardrumRegular: ["WardrumRegular", "sans-serif"],
        FredokaRegular: ["FredokaRegular", "sans-serif"],
        Dancing: ["Dancing", "sans-serif"],
      },
      boxShadow: {
        "solid-black": "2px 2px 0 4px black", // Adjust the size (4px) as needed
        "solid-neon": "4px 4px 0 4px #d9fa69", // Adjust the size (4px) as needed
        "solid-black-right": "2px 0 0 black",
      },
    },
  },
  plugins: [require("tailwindcss-text-stroke")],
};
