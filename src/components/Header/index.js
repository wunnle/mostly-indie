import { Link } from 'gatsby'
import React from 'react'

import styles from './Header.module.css'
import logo from './logo.png'

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Mostly Indie" />
    </Link>
    <nav className={styles.nav}>
      <Link to="/about">About me</Link>
    </nav>
  </header>
)

export default Header
