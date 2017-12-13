import React from 'react'
import Link from 'gatsby-link'
import Obfuscate from 'react-obfuscate'

const aboutPage = () => (

  <div className="page">

    <article className="article">

    	<header>

		    <h1>Contact</h1>

    	</header>

    	<main>

            <p>I am available for international project work and for contracts in the London, Hertfordshire and Cambridgeshire area. International contracts undertaken selectivly.</p>

            <p>You can contact me on <Obfuscate tel='+44 207 097 8899' /> <br /> or email me at <Obfuscate email='enquiries@william-owen.co.uk' headers={ {subject:'Enquiry from the website'} } /></p>


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
