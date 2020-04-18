import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentBlock } from "../components/containers"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Contact Us</h1>
    <hr />
    <ContentBlock>
      <div className="lrgCol">
        <p>This will be the contact form</p>
      </div>
      <div className="smlCol"></div>
    </ContentBlock>
  </Layout>
)

export default IndexPage
