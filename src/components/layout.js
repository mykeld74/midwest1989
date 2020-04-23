import React, { useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { lightTheme, darkTheme } from "../themes/theme"
import { GlobalStyles } from "../themes/global"
import { useDarkMode } from "./useDarkMode"
import { Container } from "./containers"
import "./navigation/nav.css"
import { MotionNav } from "./navigation/MotionNav"
import Header from "./header"
import "./layout.css"
import Toggle from "./toggle"

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
    }
  `)

  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MotionNav />
      <div className="content">
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
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
