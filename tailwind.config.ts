import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['PressStart2P', 'system-ui'],
      },
      animation: {
        'pixel-bounce': 'bounce 1s infinite',
        'pixel-spin': 'spin 2s linear infinite',
        'pixel-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderWidth: {
        'pixel': '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
