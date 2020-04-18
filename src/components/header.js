import { Link } from "gatsby"
import Img from "gatsby-image"
import Styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const StyledImg = Styled(Img)`
  width: calc(100% - 20px);
  max-width: 300px;
`

const Head = Styled.header`
  background: #000;
  border-bottom: 5px solid #FF5A00;
`

const Header = ({ siteTitle }) => {
  const image = useStaticQuery(graphql`
    query imageQuery {
      logo: imageSharp(fluid: { originalName: { eq: "midwestLogo.png" } }) {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <Head>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `20px 0`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <StyledImg fluid={image.logo.fluid} />
          </Link>
        </h1>
      </div>
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
