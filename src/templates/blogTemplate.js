import { graphql } from 'gatsby'
import React from 'react'
import snarkdown from 'snarkdown'

import Layout from '../components/Layout'
import timeSince from '../helpers/humanFriendlyDates'
import styles from './blogTemplate.module.css'

const Template = ({
  data // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
