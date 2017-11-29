import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Index({ data }) {

	console.info(data);

	const { edges: posts } = data.allMarkdownRemark;

	return (

			<main>

				<section className="posts-listing-verbose page">

					<h2>All Articles</h2>

					{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {

							return (

								<article className="post-listing-item" key={post.id}>

									<header>

										<h1 className="post-title">

											<Link to={post.frontmatter.path}>{ post.frontmatter.title }</Link>

										</h1>

									</header>

									<main>

										<p className="post-excerpt">{post.excerpt}</p>

									</main>

								</article>

							);

						})}

				</section>

			</main>

	);
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
					}
				}
			}
		}
	}
`;