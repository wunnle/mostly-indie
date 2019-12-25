import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import snarkdown from 'snarkdown'

import timeSince from '../../helpers/humanFriendlyDates'
import styles from './PostLink.module.css'

const PostLink = ({ post }) => {
  return (
    <Link className={styles.link} to={post.frontmatter.path}>
      {post.frontmatter.featuredImg && (
        <Img sizes={post.frontmatter.featuredImg.childImageSharp.sizes} />
      )}
      <div className={styles.postInfo}>
        <p
          className={styles.postTitle}
          dangerouslySetInnerHTML={{ __html: snarkdown(post.frontmatter.title) }}
        />
        <p className={styles.postDate}>{timeSince(post.frontmatter.date)} </p>
      </div>
    </Link>
  )
}

export default PostLink
