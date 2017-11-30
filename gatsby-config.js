module.exports = {

	siteMetadata: {

		title: `William Owen UK Limited`,
		siteUrl: `http://www.william-owen.co.uk`

	},

	pathPrefix: `/`,

	plugins: [

		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-stylus`,
		{

			resolve: 'gatsby-transformer-remark',

			options: {

				plugins: [
					{

						resolve: `gatsby-remark-prismjs`,

						options: {

							classPrefix: "language-"

						}

					}

				]

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