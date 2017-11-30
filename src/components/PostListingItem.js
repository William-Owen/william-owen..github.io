import React from 'react';
import Link from 'gatsby-link';

export default function PostListingItem({ post }) {

	return (

		<article className="PostListingItem" key={post.id}>

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

}
