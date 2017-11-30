import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PostListingItem from '../components/PostListingItem';

export default function Index({ data }) {

	const { edges: posts } = data.allMarkdownRemark;

    let allTags = {};

    posts.forEach(({ node }) => {

        if (node.frontmatter.tags) {

          node.frontmatter.tags.forEach(tag => {

              if (!allTags[tag]) {
                allTags[tag] = [];
              }
              allTags[tag].push(node);

            });

        }

     });

	return (

			<main>

				<section className="posts-listing-verbose page">

					<h2>All Articles</h2>

					{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {

						return (

							<PostListingItem post={post} />

						);

					})}

				</section>

				<aside className="tag-list">

					<h2>Tags</h2>

					{Object.keys(allTags).map(tagName => {

						const tags = allTags[tagName];

						return (

							<Link key={tagName} to={`/tags/${tagName}`}>

								{tagName}

							</Link>

						);

					})}

				</aside>

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
						path,
						tags
					}
				}
			}
		}
	}
`;