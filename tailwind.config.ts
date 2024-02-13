import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'morning': "url('/publicdomainq-0041781jae.jpg')",
        'night': "url('/publicdomainq-0060524jyp.jpg')",
      },
      fontSize: {
        "responsive": "calc((100vw - 375px) * 10 / 905 + 20px)"
      }
    }
  },
  plugins: [require("daisyui")],
};
export default config;
