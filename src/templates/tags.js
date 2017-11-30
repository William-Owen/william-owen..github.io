import React from 'react';
import GatsbyLink from 'gatsby-link';
import PostListingItem from '../components/PostListingItem';

// import HomeIcon from 'react-icons/lib/fa/home';
// import TagsIcon from 'react-icons/lib/fa/tags';

import Link from '../components/Link';

// import '../css/tags.css';

export default function Tags({ pathContext }) {

  const { posts: allTagCollections, post:thisTagCollection, tag } = pathContext;

  if (tag) {

    // This template is listing posts from a single tag

    console.info('allTagCollections', allTagCollections);
    console.info('thisTagCollection', thisTagCollection);

    return (

      <main>

        <section className="posts-listing-verbose page">

          <h2>Tagged with {tag}</h2>

          <p className="tag-count">

            {thisTagCollection.length} post{thisTagCollection.length === 1 ? '' : 's'}

          </p>

            {thisTagCollection.map((post) => {

              return (

               <PostListingItem post={post} />

              );

            })}

        </section>

        <Link className="all-tags-link" to="/tags">View all tags</Link>

      </main>

    );

  }

  return (

      <main>

        <section className="posts-listing-verbose page">

          <h2>Tags</h2>

          <nav className="tag-list">

            {Object.keys(allTagCollections).map(tagName => {

              const tags = allTagCollections[tagName];

              return (

                <GatsbyLink key={tagName} to={`/tags/${tagName}`}>

                  {tagName}

                </GatsbyLink>

              );

            })}

          </nav>

        </section>

        <Link className="all-articles-link"  to="/artiicles">View all posts</Link>

      </main>

  );
}