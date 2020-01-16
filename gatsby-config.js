module.exports = {
  siteMetadata: {
    title: `Mostly Indie`,
    description: `A blog about game reviews and news. And mostly about indies.`,
    author: `@ranxi`,
    websiteUrl: 'https://mostlyindie.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-articles`,
        path: `${__dirname}/src/articles`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/md-pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'nofollow'
            }
          },
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 708
            }
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 800,
              height: 400
            }
          },
          {
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              width: 320,
              height: 320
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-embed-spotify`,
          `@weknow/gatsby-remark-twitter`,
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
