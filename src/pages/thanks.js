import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThanksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Thanks" />
      <h1>Thank You</h1>
      <p>Thanks so much for getting in touch. If you get a chance, please rate or review the podcast on Apple Podcasts. Most of all, keep listening!</p>


    </Layout>
  )
}

export default ThanksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`