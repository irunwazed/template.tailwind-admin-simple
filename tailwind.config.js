/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./public/**/*.{html,js}'
	],
  theme: {
    extend: {
			colors: {

				warning: '#E65F2B',
				info: '#06b6d4',
				secondary: '#64748b',
				dark: '#060606',
				default: '#EBDFD7',

			}
		},
  },
  plugins: [],
}

