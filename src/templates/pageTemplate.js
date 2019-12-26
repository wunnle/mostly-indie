import { graphql } from 'gatsby'
import React from 'react'
import snarkdown from 'snarkdown'

import Layout from '../components/Layout'
import styles from './blogTemplate.module.css'

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post-container">
        <div className={styles.post}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: snarkdown(frontmatter.title) }}
          />
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
