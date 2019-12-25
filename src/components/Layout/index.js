import './layout.css'

import PropTypes from 'prop-types'
import React from 'react'

import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
