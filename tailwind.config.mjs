/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens:{
				xs: '200px',
				xxs: '400px',
				
	// md	 768px
	// lg	 1024px
	// xl	 1280px
	// 2xl	 1536px 
			},
			colors: {
				context :`var(--context-color)`
			},
		},
	},
	plugins: [
		
	],
}
