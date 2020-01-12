import { Link } from 'gatsby'
import React from 'react'

import logo from '../Header/logo.png'
import styles from './Footer.module.css'
import steamIcon from './steam.svg'
import twitterIcon from './twitter.svg'

const Footer = () => (
  <footer className={styles.footer}>
    <Link to="/">Mostly Indie</Link>
    <div className={styles.contact}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://store.steampowered.com/curator/8260569-Mostly-Indie/"
      >
        <img src={steamIcon} alt="steam" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ranxi">
        <img src={twitterIcon} alt="twitter" />
      </a>
    </div>
  </footer>
)

export default Footer
