import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ReactSVG from 'react-svg';
import Obfuscate from 'react-obfuscate'

import './index.styl'

const TemplateWrapper = ({ children }) => (

  <div>

    <Helmet title="William Owen UK Limited" meta={[ { name: 'description', content: 'William Owen UK Limited, Internet Development Consultatancy and Contracting.' }, { name: 'keywords', content: 'william owen, web, development, contractor, contracting, ui, ux, design, programer, javascript, html, css, coder' }, ]} />

    <header className="site-header">

      <div className="page">

        <span className="avatar" style={{"backgroundImage": `url(data:image/jpeg;base64,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)`}} />

        <h1>

          <Link to="/">William Owen UK Limited</Link>
          <span className="sub-title">Internet Development Consultatancy and Contracting</span>

        </h1>

      </div>

      <nav>

        <div className="page">

          <Link activeClassName="active" exact to="/"><span>Home</span></Link>
          <Link activeClassName="active" exact to="/articles/"><span>Articles</span></Link>
          <Link activeClassName="active" exact to="/projects/"><span>Projects</span></Link>
          <Link activeClassName="active" exact to="/tech"><span>Tech Stack</span></Link>
          <Link activeClassName="active" exact to="/contact/"><span>Contact</span></Link>

        </div>

      </nav>

    </header>

    <div>

      { children() }

    </div>

    <footer className="site-footer">

      <div className="page">

        <nav>

          <a href="https://twitter.com/twilowen">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/twitter.svg" />
            Twitter: @twilowen

          </a>

          <a href="https://github.com/William-Owen">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/github.svg" />
            GitHub: William-Owen

          </a>

          <a href="www.linkedin.com/in/williamowenuk">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/linkedin.svg" />
            LinkedIn

          </a>

        </nav>

        <div className="contact">

          <p>You can contact me on <Obfuscate tel='+44 207 097 8899' /> <br /> or email me at <Obfuscate email='enquiries@william-owen.co.uk' headers={ {subject:'Enquiry from the website'} } /></p>

        </div>

        <div className="pride">

          <h4>This website was handcrafted. It was designed without the use of templates or bloated frameworks. It was created using some of these excellent technologies and services.</h4>

          <a href="https://www.gatsbyjs.org/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/gatsby.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Gatsby</p>

          </a>

          <a href="http://graphql.org/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/graphql.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>GraphQL</p>

          </a>

          <a href="https://reactjs.org/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/react.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>React.js</p>

          </a>

          <a href="http://stylus-lang.com/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/stylus.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Stylus</p>

          </a>

          <a href="https://github.com/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/github.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>GitHub</p>

          </a>

          <a href="https://nodejs.org/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/nodejs.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Node JS</p>

          </a>

          <a href="https://www.npmjs.com/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/npm.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>NPM</p>

          </a>

          <a href="https://webpack.js.org/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/webpack.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Webpack 2</p>

          </a>

          <a href="http://www.ecma-international.org/publications/standards/Ecma-402.htm">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/javascript.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>JavaScript</p>

          </a>

          <a href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/css3.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>CSS3</p>

          </a>

          <a href="https://www.w3.org/TR/html5/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/html5.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>HTML5</p>

          </a>

          <a href="https://www.sublimetext.com/">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/sublimetext.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Sublime Text 3</p>

          </a>

          <a href="https://www.google.com/chrome/index.html">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/googlechrome.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Google Chrome</p>

          </a>

          <a href="https://github.com/simple-icons/simple-icons">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/simpleicons.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Simple Icons</p>

          </a>

          <a href="https://github.com/simple-icons/simple-icons">

            <ReactSVG path="https://unpkg.com/simple-icons@latest/icons/adobetypekit.svg" className="svg" wrapperClassName="svg-wrapper" />
            <p>Adobe Typekit</p>

          </a>

          <h5>Also thanks to: -</h5>

          <div className="also-thanks">

            <a href="http://prismjs.com/">PrismJS</a>
            <a href="https://www.npmjs.com/package/react-svg">react-svg</a>
            <a href="https://typekit.com/">Adobe Typekit</a>

          </div>

        </div>

        <p className="company-details">William Owen UK LIMITED registered in England no. 08243425. VAT number 152978378</p>
        <p className="copyright">&copy; 2017 William Owen UK LIMITED</p>

      </div>

    </footer>

  </div>

)

TemplateWrapper.propTypes = {

  children: PropTypes.func,

}

export default TemplateWrapper