import { Link } from 'gatsby'
import React from 'react'

import styles from './Footer.module.css'
import githubIcon from './github.svg'
import steamIcon from './steam.svg'
import twitchIcon from './twitch.svg'
import twitterIcon from './twitter.svg'

const Footer = () => (
  <footer className={styles.footer}>
    <Link to="/" class="h-card" rel="me">
      Mostly Indie
    </Link>
    <div className={styles.contact}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/wunnle/mostly-indie"
      >
        <img src={githubIcon} alt="github" />
      </a>
      <a target="_blank" rel="noopener noreferrer me" href="https://twitter.com/ranxi">
        <img src={twitterIcon} alt="twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://store.steampowered.com/curator/8260569-Mostly-Indie/"
      >
        <img src={steamIcon} alt="steam" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://www.twitch.tv/mostlyindie/"
      >
        <img src={twitchIcon} alt="twitch" />
      </a>
      <div style={{ display: 'none' }}>
        <a href="https://github.com/mostlyindie" rel="me">
          https://github.com/mostlyindie
        </a>
        <a href="mailto:stopsinging@gmail.com" rel="me">
          stopsinging@gmail.com
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
