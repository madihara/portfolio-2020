import React from 'react'
import styled from 'styled-components'
import '../index.css'

import * as palette from '../variables/Variables'

const About = () => {
  return(
    <>
      <Title>madison haradine</Title>
      <SubTitle>I design and develop webapps.</SubTitle>
    </>
  )
}

export default About

const Title = styled.h2`
  font-family: 'Abril Fatface', cursive;
  font-size: 3rem;
  padding: 0;
  /* margin: 0; */
`
const SubTitle = styled.h4`
  font-weight: normal;
`