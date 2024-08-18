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
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
      animation: {
        animateText: "animateText 24s linear infinite",
				animateChars: "animateChars 24s linear infinite",
			},
			keyframes: {
				animateText: {
					"0%": {
						"transform-origin": "200px 50%",
						transform: "translate(-50%, -50%) rotate(0deg)",
						// filter: "hue-rotate(0deg)",
					},
					"50%": {
						"transform-origin": "200px 50%",
						transform: "translate(-50%, -50%) rotate(360deg)",
					},
					"50.00000001%": {
						"transform-origin": "-120px 50%",
						transform: "translate(-50%, -50%) rotate(360deg)",
					},
					"100%": {
						"transform-origin": "-120px 50%",
						transform: "translate(-50%, -50%) rotate(0deg)",
						// filter: "hue-rotate(360deg)",
					},
				},
				animateChars: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(-360deg)",
					},
					"50.00000001%": {
						transform: "rotate(-360deg)",
					},
					"100%": {
						transform: "rotate(0deg)",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
