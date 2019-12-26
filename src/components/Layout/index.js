import './layout.css'

import PropTypes from 'prop-types'
import React from 'react'

import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
