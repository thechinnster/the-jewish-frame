import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactUsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact Us" />
      
      <p>We'd love to hear from you. Drop us a line using the form below.</p>

      <form className="pure-form pure-form-stacked" action="https://submit-form.com/79lHN8sU">
  <fieldset>
      <label htmlFor="name">Name</label>
    <input type="text " id="name" name="name"  required="required" />
    </fieldset>
  <p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"  required="required" />      
  </p>
  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="message"
    
    required="required"
    cols="50"
    rows="10"
  ></textarea>
  <fieldset>
    <button className="pure-button pure-button-primary" type="submit">Send</button>
  </fieldset>
</form>

    </Layout>
  )
}

export default ContactUsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`