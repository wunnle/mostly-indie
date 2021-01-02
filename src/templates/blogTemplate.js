import { graphql } from 'gatsby'
import React from 'react'
import snarkdown from 'snarkdown'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import getTwitterSearchLink from '../helpers/getTwitterLink'
import timeSince from '../helpers/humanFriendlyDates'
import styles from './blogTemplate.module.css'
import twitterIcon from './twitter.svg'

const Template = ({ data }) => {
  const { websiteUrl } = data.site.siteMetadata
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  const { sharedOnTwitter, path, isoDate } = frontmatter

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        image={websiteUrl + frontmatter.featuredImg.childImageSharp.sizes.src}
        description={excerpt}
      />
      <div className="blog-post-container">
        <div className={styles.post}>
          <h1
            className={[styles.title, 'p-name'].join(' ')}
            dangerouslySetInnerHTML={{ __html: snarkdown(frontmatter.title) }}
          />
          <div style={{ display: 'none' }}>
            <p className={['p-author', 'h-card'].join(' ')} rel="author">
              Ranxi
            </p>
            <time className="dt-published" dateTime={isoDate}>
              {isoDate}
            </time>
            <a className="u-url" href={`${websiteUrl}${path}`}>
              Link to the post
            </a>
          </div>
          <p className={styles.date}>{timeSince(frontmatter.date)}</p>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
          {sharedOnTwitter && (
            <a
              className={styles.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              href={getTwitterSearchLink(path)}
            >
              <img src={twitterIcon} alt="twitter" /> Discuss on Twitter
            </a>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        description
        author
        websiteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        isoDate: date(formatString: "YYYY-MM-DD HH:MM:SS")
        path
        title
        sharedOnTwitter
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
