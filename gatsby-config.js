require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Strokes By Aly`,
    // Default title of the page
    siteTitleAlt: `Strokes by Aly - Portfolio by Alicia Menezes`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Strokes by Aly - Portfolio by Alicia Menezes`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://strokesbyaly.com`,
    // Used for SEO
    siteDescription: `Original work by Alicia Menezes`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/avatar.png`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: 'Alicia Menezes',
        location: 'Germany',
        showThemeAuthor: false,
        socialMedia: [
          { title: 'LinkedIn', href: 'https://ae.linkedin.com/in/aliciamenezes' },
          { title: `Instagram`, href: `https://www.instagram.com/alicia.23/` }
        ]
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Strokes by Aly - Alicia's Portfolio`,
        short_name: `Strokes by Aly`,
        description: `Original work by Alicia Menezes`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
