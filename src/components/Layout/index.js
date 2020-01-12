import './layout.css'

import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import favicon from '../../images/favicon.ico'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
