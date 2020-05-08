import React from "react"
import PropTypes from "prop-types"
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

  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MotionNav />
      {!componentMounted && (
        <div style={{ height: "100vh", background: "#111" }} />
      )}
      {componentMounted && (
        <div className="content">
          <Container>{children}</Container>
        </div>
      )}
      <Footer>P.O. Box 1726 | Bolingbrook | IL | 60440 | 630-759-5033</Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
