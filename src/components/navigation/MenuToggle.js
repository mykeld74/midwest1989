import * as React from 'react'
import { motion } from 'framer-motion'
import Styled from 'styled-components'

const Path = props => <motion.path fill="transparent" strokeWidth="3" stroke="#fff" strokeLinecap="round" {...props} />
const Hamburger = Styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 14px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`
export const MenuToggle = ({ toggle }) => (
  <Hamburger onClick={toggle}>
    <svg width="32" height="32" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </Hamburger>
)
