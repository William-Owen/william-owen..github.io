import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.styl'

const Header = () => (

  <header style={{ background: 'rebeccapurple', marginBottom: '1.45rem', }} >

    <div style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem', }} >

      <h1 style={{ margin: 0 }}>

        <Link to="/" style={{ color: 'white', textDecoration: 'none', }}>

          William Owen UK Limited

        </Link>

      </h1>

      <nav>

        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>

      </nav>

    </div>

  </header>

)

const TemplateWrapper = ({ children }) => (

  <div>

    <Helmet title="William Owen UK LIMETED" meta={[ { name: 'description', content: 'William Owen UK Limited, Internet Development Consultatancy and Contracting.' }, { name: 'keywords', content: 'william owen, web, development, contractor, contracting, ui, ux, design, programer, javascript, html, css, coder' }, ]} />

    <Header />

    <div style={{ margin: '0 auto', maxWidth: 960, padding: '0px 1.0875rem 1.45rem', paddingTop: 0, }} >

      { children() }

    </div>

  </div>

)

TemplateWrapper.propTypes = {

  children: PropTypes.func,

}

export default TemplateWrapper