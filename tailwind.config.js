/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#2C2E65",
				secundario: "#3CCBDA",
				text: "#5B5766",
				white: "#FFFFFF",
				gray: "#F3F3F3",
				purple: "#716C80",
				darkGray: "#444444",
				blue: "#B0F8FF",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Playfair Display", "serif"],
		},
	},
	plugins: [],
};
