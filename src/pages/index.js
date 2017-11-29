import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link';

export default function Index({ data }) {

	const { edges: posts } = data.allMarkdownRemark;

	return (

		<div className="posts-listing">

			{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {

					return (

						<article className="post-listing-item" key={post.id}>

							<header>

								<h1 className="post-title">

									<GatsbyLink to={post.frontmatter.path}>{ post.frontmatter.title }</GatsbyLink>

								</h1>

								<span className="post-date-time">{post.frontmatter.date}</span>

							</header>

							<main>

								<p className="post-excerpt">{post.excerpt}</p>

							</main>

						</article>

					);

				})}

		</div>
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