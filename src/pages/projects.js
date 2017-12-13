import React from 'react'
import Link from 'gatsby-link'
import ReactSVG from 'react-svg';

const aboutPage = () => (

  <div className="page">

    <article className="article">

    	<header>

		    <h1>Projects
                <span>A rough list of some of my own personal projects.</span>
            </h1>

    	</header>

        <main>

    	    <section className="project">

                <a className="project-link" href="http://hulo.io">

                    <h2>hulo.io</h2>
                    <span>http://hulo.io</span>

                </a>

                <div className="project-description">

                    <p>holo.io is a command-line tool for capturing whats in your head.</p>
                    <p>The tool is location, repo aware enabeling you to quickly recall your last thoughts within a given context.</p>

                    <div className="related-tech">

                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/javascript.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/nodejs.svg" className="svg" wrapperClassName="svg-wrapper" />

                    </div>

                </div>

            </section>

            <section className="project">

                <a className="project-link" href="https://deviantRobot.com">

                    <h2>DeviantRobot.com</h2>
                    <span>https://deviantRobot.com</span>

                </a>

                <div className="project-description">

                    <p>DeviantRobot.com was created to be the hub of that community. </p>
                    <p>In 2014 I started a community for geeks an nerds; it now has over 5000 members on Meetup.com and has group in London, Cambridge in the UK and Berlin, Germany.</p>

                    <div className="related-tech">

                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/javascript.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/nodejs.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/webpack.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/graphql.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/stylus.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/redux.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/redis.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/docker.svg" className="svg" wrapperClassName="svg-wrapper" />

                    </div>

                </div>

            </section>

            <section className="project">

                <a className="project-link" href="http://neotoxic.com">

                    <h2>Neotoxic.com</h2>
                    <span>http://neotoxic.com</span>

                </a>

                <div className="project-description">

                    <p>My photographic portfolio here.</p>
                    <p>For many years now I have been interested in model and fasion photography. </p>
                    <p><strong>NSFW:</strong> Please note some of the images in my portfolio my not be considered safe to view in a work context.</p>

                    <div className="related-tech">

                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/php.svg" className="svg" wrapperClassName="svg-wrapper" />
                        <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/mysql.svg" className="svg" wrapperClassName="svg-wrapper" />

                    </div>

                </div>

            </section>

            <Link to="/">Go back to the homepage</Link>

        </main>

    </article>

  </div>

)

export default aboutPage
