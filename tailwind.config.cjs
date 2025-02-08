module.exports = {
    content: [
      './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        colors: {
			white: '#e2e2e2',
			theme: 'rgb(29, 30, 32)',
            secondary: 'rgb(46, 46, 51)',
            tertiary: '#0092ff',
			black: '#000000',
			gray: '#e2e2e2',
            kindagrey: '#f2f2f2',
			lightblue: '#0092ff',
			transparent: 'transparent',
		},
        screens: {
            'xs': '375px',

            'sm': '640px',
      
            'md': '768px',
      
            'lg': '1024px',
      
            'xl': '1280px',
      
            '2xl': '1536px',
          },
      extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            }
      },
    },
    plugins: [
        require('@tailwindcss/typography'), // Ensure you have the typography plugin installed
      ],
  };