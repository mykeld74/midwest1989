import React from "react"
import { func, string } from "prop-types"
import Styled from "styled-components"

import MoonIcon from "../images/moon.svg"
import SunIcon from "../images/sun.svg"

const ToggleButton = Styled.button`  
  position: absolute;
  top: 130px;
  right: 0;
  box-sizing: border-box;
  outline: none;
  background: ${({ theme }) => theme.buttonBg};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 20px;
  cursor: pointer;
  margin: 0 20px 0 0;
  overflow: hidden;
  padding: 0;
  width: 32px;
  height: 32px;

  .icons{
    display: inline-block;
  }
  .imgContainer {
    box-sizing: border-box;
    height: 28px;
    width: 26px;
    transition: all 0.3s linear;
    background: ${({ theme }) => theme.buttonBg};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;    
    img{
      margin: 0;
      padding: 0;
      width: 24px;
      height: 24px;
      display: block;
    }
  }
  .sunIcon {
    transform: ${({ theme }) => theme.sunPosition};
  }
  .moonIcon {
    transform: ${({ theme }) => theme.moonPosition};
  }
`

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      <div className="icons">
        <div className="imgContainer sunIcon">
          <img src={SunIcon} alt="Light Mode" />
        </div>
        <div className="imgContainer moonIcon">
          <img src={MoonIcon} alt="Dark Mode" />
        </div>
      </div>
    </ToggleButton>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
