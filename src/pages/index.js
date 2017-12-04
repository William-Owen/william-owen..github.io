import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Index({ data }) {

	console.info(data);

	const { edges: posts } = data.allMarkdownRemark;

	return (

			<main>

				<section className="main-feature">

					<div className="page">

						<h1>Technical solutions that deliver elegent experiences.</h1>

						<p>Over 20 years experience delivering customer-facing websites, internet-based solutions and creative visual design for a wide range of companies and organisations.</p>

					</div>

				</section>

				<section className="posts-listing page">

					<h2>Recent Articles</h2>

					{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {

							return (

								<article className="PostListingItem" key={post.id}>

									<header>

										<h1 className="post-title">

											<Link to={post.frontmatter.path}>{ post.frontmatter.title }</Link>

										</h1>

									</header>

								</article>

							);

						})}

				</section>

			</main>

	);
}

export const pageQuery = graphql`
	query FullIndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
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