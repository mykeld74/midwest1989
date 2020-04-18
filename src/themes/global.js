import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  div.content {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: calc(100vh - 165px);
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  #themeButton {
    color: ${({ theme }) => theme.text};
  }
  hr{
    border-bottom: 1px solid ${({ theme }) => theme.text};
    margin: 5px 0 15px;
    padding: 0;
    height: 0;
  }
`
