import React from 'react'
import styled from 'styled-components'
import '../index.css'

import * as palette from '../variables/Variables'

const About = () => {
  return(
    <Main>
      <FlexRow>
        <Title>madison <br></br> haradine</Title>
        {/* <Description>Hey this will be the description</Description> */}
      </FlexRow>
      
      <SubTitle>Freelance Frontend Developer</SubTitle>

    </Main>
  )
}

export default About


const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem;
  color: white;

`
const FlexRow = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`
export const Title = styled.h2`
  font-family: 'Abril Fatface', cursive;
  font-size: 10rem;
  padding: 0rem;
  margin:  0;
  color: white;
  line-height: 8.5rem;
  
  /* margin: 0; */
`
export const Description = styled.section`
  padding: 3rem 0 0 3rem;
  text-align: right;

`
const SubTitle = styled.h4`
  /* font-weight: normal; */
  font-size: 2rem;
  color: #717171;
  padding: 2rem 0;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: .8rem;
`