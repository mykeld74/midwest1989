import Styled, { css } from "styled-components"

export const Container = Styled.div`
  width: calc(100vw - 20px);
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;
`
export const ContentBlock = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 801px){
    flex-wrap: wrap;
    ${props =>
      props.reverse &&
      css`
        flex-wrap: wrap-reverse;
      `}
  }
  .lrgCol{
    width: 55%;
    @media (max-width: 801px){
      width: 100%;
    }
  }
  .smlCol{
    width: 40%;
    @media (max-width: 801px){
      width: 100%;
    }
  }
`
