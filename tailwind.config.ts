import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: "#0b1f3a",
				accent: "#2563eb",
			},
		},
	},
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
};

export default config;
