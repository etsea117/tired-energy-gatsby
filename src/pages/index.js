// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to Tired Energy, my Gatsby site!</p>
      <StaticImage
        alt="Ethan Sea, the author of this blog."
        src='../images/author.jpg'
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
