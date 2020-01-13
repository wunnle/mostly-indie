import { graphql } from 'gatsby'
import React from 'react'
import snarkdown from 'snarkdown'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import timeSince from '../helpers/humanFriendlyDates'
import styles from './blogTemplate.module.css'

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        image={window.location.origin + frontmatter.featuredImg.childImageSharp.sizes.src}
        description={excerpt}
      />
      <div className="blog-post-container">
        <div className={styles.post}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: snarkdown(frontmatter.title) }}
          />
          <p className={styles.date}>{timeSince(frontmatter.date)}</p>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImg {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
