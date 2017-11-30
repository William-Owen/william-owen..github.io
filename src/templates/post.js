import React from 'react';
import Helmet from 'react-helmet';
import Link from '../components/Link';
import Tags from '../components/Tags';

export default function Template({ data, pathContext }) {

  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (

    <div className="blog-post-container">

      <Helmet title={`Gatsby Blog - ${post.frontmatter.title}`} />

      <article className="article blog-post page">

        <header>

          <h1 className="title"> {post.frontmatter.title} </h1>

        </header>

        <main className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />

        <footer>

          <p className="date-time">Article Published: { post.frontmatter.date } By William Owen</p>

          <h5>Related Tags</h5>

          <Tags list={post.frontmatter.tags || []} />

          <h5>Next Articles</h5>

          <nav className="next-previous-article">

            {prev &&

              <Link className="link prev" to={prev.frontmatter.path}>

                {prev.frontmatter.title}

              </Link>

            }

            {next &&

              <Link className="link next" to={next.frontmatter.path}>

                {next.frontmatter.title}

              </Link>

            }

          </nav>

          </footer>

      </article>

    </div>

  );

}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;