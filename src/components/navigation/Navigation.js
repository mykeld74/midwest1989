import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"
import Styled from "styled-components"

const variants = {
  open: {
    height: "100vh",
    top: "120px",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    height: 0,
    top: "-100px",
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
}

const StyledLink = Styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;  
`

export const Navigation = () => (
  <motion.div variants={variants} className="navBlock">
    <MenuItem>
      <StyledLink to="/">Home</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/about/">About Us</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/contact/">Contact Us</StyledLink>
    </MenuItem>
  </motion.div>
)
