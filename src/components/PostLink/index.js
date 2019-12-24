import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import styles from './PostLink.module.css'

const PostLink = ({ post }) => {
  return (
    <Link className={styles.link} to={post.frontmatter.path}>
      <Img sizes={post.frontmatter.featuredImg.childImageSharp.sizes} />
      <div className={styles.postInfo}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </div>
    </Link>
  )
}

export default PostLink
