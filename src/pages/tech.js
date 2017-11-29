import React from 'react'
import Link from 'gatsby-link'

const aboutPage = () => (

  <div className="page">

    <article className="article">

    	<header>

		    <h1>Tech</h1>

    	</header>

    	<main>

        <ul className="tech-interests">

            <li>HTML, <span>JSX</span>, Pug, Jade, Twig, Jinja2, mustache</li>
            <li>CSS, <span>Stylus</span>, Less, SASS, PostCSS</li>
            <li><span>React.js</span>, <span>Redux</span>, JasvaScript, Angular, Vue.js, JQuery, GraphQL</li>
            <li><span>Adobe Photoshop</span>, <span>Afinity Designer</span>, Sketch</li>
            <li>Craft, Wordpress, Cockpit</li>
            <li><span>Slack</span>, Trello, Jira</li>
            <li><span>GitHub</span>, GitLabl, CircleCI</li>
            <li><span>Adobe Premier</span>, Adobe After Effects</li>
            <li>Reaper Pro</li>
            <li><span>Docker</span></li>

        </ul>

        <Link to="/">Go back to the homepage</Link>

    	</main>

    </article>

  </div>

)

export default aboutPage
