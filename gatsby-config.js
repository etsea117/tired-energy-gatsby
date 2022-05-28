module.exports = {
  siteMetadata: {
    title: `Tired Energy`,
    siteUrl: `https://tired.energy`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    }
  ],
}
