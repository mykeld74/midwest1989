import React, { useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../themes/theme"
import { GlobalStyles } from "../themes/global"
import { Container } from "./containers"
import "./navigation/nav.css"
import { MotionNav } from "./navigation/MotionNav"
import Header from "./header"
import "./layout.css"

const ToggleImg = Styled(Img)`
  width: 30px;
`
const ToggleButton = Styled.button`  
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  outline: none;
  position: absolute;
  top: 140px;
  right: 30px;
  @media (max-width: 801px){
    right: 10px;
  }
  p{
    width: 100%;
    font-size: 12px;
    @media (max-width: 801px){
      display: none;
    }
  }
`

const Footer = Styled.footer`
  background: #000;
  color: #fff;
  text-align: right;
  padding: 10px 20px;
  @media (max-width: 801px){
    font-size: 12px;
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      sun: imageSharp(fixed: { originalName: { eq: "sun.png" } }) {
        fixed(width: 25) {
          ...GatsbyImageSharpFixed
        }
      }
      moon: imageSharp(fixed: { originalName: { eq: "moon.png" } }) {
        fixed(width: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  const [isDarkTheme, setDarkTheme] = useState(true)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MotionNav />
      <div className="content">
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyles />
          <ToggleButton
            onClick={() => setDarkTheme(!isDarkTheme)}
            id="themeButton"
          >
            {isDarkTheme ? (
              <>
                <ToggleImg fixed={data.sun.fixed} />
                <p>Light Mode</p>
              </>
            ) : (
              <>
                <ToggleImg fixed={data.moon.fixed} />
                <p>Dark Mode</p>
              </>
            )}
          </ToggleButton>
          <Container>{children}</Container>
        </ThemeProvider>
      </div>
      <Footer>P.O. Box 1726 | Bolingbrook | IL | 60440 | 630-759-5033</Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
