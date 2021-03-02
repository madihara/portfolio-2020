import React from 'react'
import {FaRegCopyright } from 'react-icons/fa'
import styled from 'styled-components'
import {Title} from './About'


const Contact = () => {
  return(
    <>
      <Title style={{textAlign:'center', marginTop: '6rem'}}>contact me</Title>
      <Wrapper>
        <FlexItem>
          <Heading>Email: </Heading>
          <Heading>madisonharadine@gmail.com</Heading>
        </FlexItem>
        <FlexItem>
          <Heading>Phone</Heading>
          <Heading>(734)474-1893</Heading>
        </FlexItem>

      </Wrapper>
      <Copyright>
        <FaRegCopyright/> {new Date().getFullYear()} Madison Haradine
      </Copyright>
    </>
  )
}

export default Contact

const Wrapper = styled.section`
  padding: 4rem 6rem;
  color: white;
`

const FlexItem = styled.div`
  display: flex;
  margin: 2rem 0;
  

`
const Heading = styled.header`
  font-size: 2rem;
  padding: 0 1rem;
`

const Copyright = styled.section`
  font-size: 0.8rem;
  color: #717171;
  text-align: center;
`

