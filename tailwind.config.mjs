/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			fontFamily: {
				chrono: ['chronoType'],
				tommyBlack:['tommyBlack'],
				tommyBold: ['tommyBold'],
				tommyLight:['tommyLight'],
				tommyMedium:['tommyMedium'],
				tommyRegular:['tommyRegular']
			  },
		},
		colors: {
			// BACKGROUND
			dark:"#1c1b22", // DARK
			snow:"#F4EFF1", // LIGHT
			// TEXT
			platinum:"#EBE6E8", // DARK
			raisinblack:"#292736", // LIGHT
			// ASIDE MENU
			night: "#110F17", // DARK
			nightlight:"#1f1d28", // LIGHT
			// MAIN PALLETE
			cerise: '#D94A6D',
			violet:'#312559',
			darkpurple:'#332230',
			// ACTION COLORS
			violetlight:'#483681',
			ocrelight:'#935e30',
	  
			richblack:"#0C0A15",
			black:"#1f1d28",
			ocre: '#DE7F26',
			timberwolf:'#c0a8a2',
		  },
		  screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px',
		  }
	},
	plugins: [],
}
