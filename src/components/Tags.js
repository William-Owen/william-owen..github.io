import React from 'react';
import Link from 'gatsby-link';

export default function Tags({ list = [] }) {

  return (

    <nav className="tag-list">

      {list.map(tag =>

        <Link key={tag} to={`/tags/${tag}`}>

          {tag}

        </Link>

      )}

    </nav>

  );

}