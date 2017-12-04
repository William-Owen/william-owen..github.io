import React from 'react';
import Link from 'gatsby-link';

export default function TagsList({ list = [] }) {

  return (

    <nav className="tag-list">

		{list.map(tag => {

	      	return (

				<Link key={tag} to={`/tags/${tag}`}>

					{tag}

				</Link>

			)

		})}

    </nav>

  );

}