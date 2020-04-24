import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { ContentBlock } from "../components/containers"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>About Us</h1>
    <hr />
    <ContentBlock reverse>
      <div className="smlCol">
        <Img fluid={data.van.fluid} />
      </div>
      <div className="lrgCol">
        <p>
          Midwest Maintenance and Management, INC is a family owned and operated
          business that was established in 1989. Owned by Tom and Teresa Boss
          this company is small but focused. We take pride in our long term
          relationships with our clients and strive to maintain a pleasant
          working environment for all involved. Our main focus is in condominium
          cleaning, office buildings, clubhouses, and other commercial cleaning.
          We are always interested in new business endeavors and look forward to
          hearing from you.
        </p>
      </div>
    </ContentBlock>
  </Layout>
)

export const query = graphql`
  query {
    van: imageSharp(fluid: { originalName: { eq: "midwestMiniVan.png" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default IndexPage
