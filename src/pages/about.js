import React from 'react'
import Link from 'gatsby-link'

const aboutPage = () => (

  <div className="page">

    <article className="article">

    	<header>

		    <h1>About William Owen</h1>

    	</header>

    	<main>

    		<p>Internet development contractor based in London, England. I specialise in UI, UX and am currently building cool stuff with Docker, React, Redux and GraphQL.</p>

	    	<p>I started out teaching myself HTML and CSS in collage back in 1995</p>

	    	<Link to="/">Go back to the homepage</Link>

    	</main>

    </article>

  </div>

)

export default aboutPage
