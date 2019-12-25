import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import timeSince from '../../helpers/humanFriendlyDates'
import styles from './PostLink.module.css'

const PostLink = ({ post }) => {
  return (
    <Link className={styles.link} to={post.frontmatter.path}>
      <Img sizes={post.frontmatter.featuredImg.childImageSharp.sizes} />
      <div className={styles.postInfo}>
        <p className={styles.postTitle}>{post.frontmatter.title}</p>
        <p className={styles.postDate}>{timeSince(post.frontmatter.date)} </p>
      </div>
    </Link>
  )
}

export default PostLink
