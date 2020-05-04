import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentBlock } from "../components/containers"
import Styled from "styled-components"

const Label = Styled.p`
  margin: 10px 0 5px;
`

const ResponsibleParties = Styled.p`
  margin: 10px 0;
  text-align: right;
  font-size: 1.4em;
`

const ContactInfo = Styled.h3`
  font-size: 1.8rem;
  text-align: right;
  margin-top: 30px;
`

const StyledInput = Styled.input`
  width: 100%;
  max-width: 360px;
  border: 1px solid #111;
  border-radius: 5px;
  height: 40px;
  padding-left: 10px;
`

const StyledTextbox = Styled.textarea`
  width: 100%;
  max-width: 360px;
  min-height: 100px;
  border: 1px solid #111;
  border-radius: 5px;
`
const StyledSubmit = Styled.button`
  width: 100%;
  max-width: 360px;
  margin-top: 20px;
  background: #FF5A00;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  font-weight: 700;
  height: 40px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  :hover{
    background: #fff;
    color: #ff5a00;
    border: 2px solid #ff5a00;
  }
`
const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Contact Us</h1>
      <hr />
      <ContentBlock>
        <div className="lrgCol">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div>
              <Label for="name">Name:</Label>
              <StyledInput type="text" name="name" id="name" />
            </div>
            <div>
              <Label for="email">Your Email:</Label>

              <StyledInput type="email" name="email" id="email" />
            </div>
            <div>
              <Label for="message">Message:</Label>

              <StyledTextbox name="message" id="message"></StyledTextbox>
            </div>
            <div>
              <StyledSubmit type="submit">Send</StyledSubmit>
            </div>
          </form>
        </div>
        <div className="smlCol">
          <ResponsibleParties>Tom and Teresa Boss - Owners</ResponsibleParties>
          <ResponsibleParties>Misty Boss- Marketing</ResponsibleParties>
          <ResponsibleParties>Jake Boss- Consultant</ResponsibleParties>
          <ResponsibleParties>Steven Jacinto- Supervisor</ResponsibleParties>

          <ContactInfo>Call Us at 630-759-5033</ContactInfo>
        </div>
      </ContentBlock>
    </Layout>
  )
}

export default ContactPage
