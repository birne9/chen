/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `chen`,
    siteUrl: `https://www.yourdomain.tld`,
    author:'birne9',

  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon:'src/static/chen.jpeg'
      },
    },
  ],
}
