import React from 'react'
import Link from 'gatsby-link'

const aboutPage = () => (

  <div className="page">

    <article className="article">

    	<header>

		    <h1>Contact</h1>

    	</header>

    	<main>

    		<p>You can me on contact <a href="tel:+442070978899">+44 (0) 207 097 8899</a></p>

    		<p>You can find me on the following: -</p>

    		<ul>

				<li><a href="https://twitter.com/twilowen">Twitter: @twilowen</a></li>
				<li><a href="https://github.com/William-Owen">GitHub: William-Owen</a></li>
				<li><a href="www.linkedin.com/in/williamowenuk">LinkedIn</a></li>

			</ul>

	    	<Link to="/">Go back to the homepage</Link>

    	</main>

    </article>

  </div>

)

export default aboutPage
