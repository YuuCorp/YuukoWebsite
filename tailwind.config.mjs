/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
		fontFamily: {
			"geist": "GeistVF, sans-serif",
		},
    extend: {
      colors: {
        "sakura-000": "#FFF0F3",
        "sakura-100": "#FFCCD5",
        "sakura-200": "#FFB3C1",
        "sakura-300": "#FF8FA3",
        "sakura-400": "#FF758F",
        "sakura-500": "#FF4D6D",
        "sakura-600": "#C9184A",
        "sakura-700": "#A4133C",
        "sakura-800": "#800F2F",
        "sakura-900": "#590D22",
        "y-gray": "#13151a",
      },
    },
  },
  plugins: [],
};
