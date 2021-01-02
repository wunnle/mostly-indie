import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'

import styles from './Header.module.css'
import logo from './logo.png'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/md-pages/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <header className={styles.header}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Mostly Indie" />
          </Link>
          <nav className={styles.nav}>
            {data.allMarkdownRemark.edges.map(e => (
              <Link key={e.node.id} to={e.node.frontmatter.path}>
                {e.node.frontmatter.title}
              </Link>
            ))}
          </nav>
        </header>
      )
    }}
  ></StaticQuery>
)

export default Header
