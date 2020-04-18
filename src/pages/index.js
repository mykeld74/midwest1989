import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { ContentBlock } from "../components/containers"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Dependable and Reliable</h1>
    <hr />
    <ContentBlock>
      <div className="lrgCol">
        <p>
          We know that you take pride in your business and for 23 years Midwest
          Maintenance and Management Inc. has provided high quality, dependable
          services to ensure that your properties present in a manner that
          reflects your company.
        </p>
        <p>
          We would like an opportunity to talk with you more about the services
          we provide and explain why we are the best company to meet your
          maintenance needs. Please click on the contact us page to connect with
          a representative and learn more about how we can serve you.
        </p>
      </div>
      <div className="smlCol">
        <Img fluid={data.jeep.fluid} />
      </div>
    </ContentBlock>
  </Layout>
)

export const query = graphql`
  query {
    jeep: imageSharp(fluid: { originalName: { eq: "midwestjeep.png" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default IndexPage
