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

				resolve: `gatsby-remark-prismjs`,
				options: {

					// Class prefix for <pre> tags containing syntax highlighting;
					// defaults to 'language-' (eg <pre class="language-js">).
					// If your site loads Prism into the browser at runtime,
					// (eg for use with libraries like react-live),
					// you may use this to prevent Prism from re-processing syntax.
					// This is an uncommon use-case though;
					// If you're unsure, it's best to use the default value.

					classPrefix: "language-"

				}

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