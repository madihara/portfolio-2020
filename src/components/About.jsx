import React from 'react'
import styled from 'styled-components'
import '../index.css'

import * as palette from '../variables/Variables'

const About = () => {
  return(
    <Main>
      <FlexRow>
        <Title>madison <br></br> haradine</Title>
        
      </FlexRow>
      
      <SubTitle>Freelance Frontend Developer</SubTitle>
      <Disclaimer style={{color:'red',fontSize: '1.4rem', padding:'0', margin: '0'}}>Site is currently under construction.</Disclaimer>
      <p style={{color: 'red', padding: '0', margin: '0'}}>Come back soon for more up to date info and improved mobile responsiveness</p>
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
  width: 100%100vw;

  @media screen and (max-width: 900px) {
    padding: 4.2rem 1.3rem 1rem 1.3rem;

  }

`
const FlexRow = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`
export const Title = styled.h2`
  font-family: 'Abril Fatface', cursive;
  font-size: 9.5rem;
  padding: 0rem;
  margin:  0;
  color: white;
  line-height: 8.5rem;

  @media screen and (max-width: 1300px) {
    font-size: 5rem;
    line-height: 4.2rem;
  }
  
  /* margin: 0; */
`

const SubTitle = styled.h4`
  /* font-weight: normal; */
  font-size: 1.8rem;
  color: #717171;
  padding: 2rem 0;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: .8rem;

  @media screen and (max-width: 1300px) {
    font-size: .7rem;
    letter-spacing: 1px;
    padding: 1rem 0;
  }
`

const Disclaimer = styled(SubTitle)`
  color: red;
  font-size: 1.4rem;
`

