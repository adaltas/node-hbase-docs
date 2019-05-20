module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: `https://hbase.js.org`,
  },
  plugins: [
    // Fix https://github.com/gatsbyjs/gatsby/issues/2049
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-glamor`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: 'markdown-pages',
      },
      // },{
      //   resolve: `gatsby-plugin-typography`,
      //   options: {
      //     pathToConfigModule: `src/utils/typography.js`,
      //   },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '64', // <600: 48; >600:64
            },
          },
          {
            resolve: 'gatsby-remark-toc-patched',
            options: {
              header: 'Table of Contents', // the custom header text
              include: [
                '**/*.md', // an include glob to match against
              ],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '±',
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-1322093-6',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#3E863D',
        theme_color: '#3E863D',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
  ],
}
