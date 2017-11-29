module.exports = {

	siteMetadata: {

		title: `William Owen UK Limited`,
		siteUrl: `http://www.william-owen.co.uk`

	},

	pathPrefix: `/project-name`,

	plugins: [

		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-stylus`,
		{

			resolve: 'gatsby-transformer-remark',

			options: {

				plugins: [] // just in case those previously mentioned remark plugins sound cool :)

			}

		}, {

			resolve: `gatsby-plugin-sitemap`

		}, {

			resolve: `gatsby-plugin-nprogress`,
			options: {

				// Setting a color is optional.
				color: `tomato`,

				// Disable the loading spinner.
				showSpinner: false,

			}

		}, {

			resolve: `gatsby-source-filesystem`,
			options: {

				name: `posts`,
				path: `${__dirname}/src/posts/`,

			},

		}

	],

}