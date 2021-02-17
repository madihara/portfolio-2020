import React, {useState} from 'react'
import styled from 'styled-components'
import About from './About'

import * as palette from '../variables/Variables'

const Hero = () => {

  const [active, setActive] = useState({name:'about'});
  console.log(active)

  return(
    <Main>
      <HeroBox onClick={() => setActive({
                name: 'about'
              })}>
        <About />
      </HeroBox>
      <ColumnWork onClick={() => setActive({
                name: 'jpc'
              })}>
        <div>
          <Date>2019-2021</Date>
        </div>
      <Wrapper>
        <Description>
          JPC // Commercial Sewing 
        </Description>
        <WorkTitle>
          Work
        </WorkTitle>
      </Wrapper>
      </ColumnWork>
      <ColumnWork onClick={() => setActive({
                name: 'wakeside'
              })}>
        <div>
          <Date>2019-2021</Date>
        </div>
      <Wrapper>
        <Description>
          WakeSide Marine 
        </Description>
        <WorkTitle>
          Work
        </WorkTitle>
      </Wrapper>
      </ColumnWork>
      <ColumnWork onClick={() => setActive({
                name: 'portfolio'
              })}>
        <div>
          <Date>2020-2021</Date>
        </div>
      <Wrapper>
        <Description>
          Portfolio 
        </Description>
        <WorkTitle>
          Work
        </WorkTitle>
      </Wrapper>
      </ColumnWork>
      <ColumnWork onClick={() => setActive({
                name: 'css'
              })}>
        <div>
          <Date>2019</Date>
        </div>
      <Wrapper>
        <Description>
          CSS Art 
        </Description>
        <WorkTitle>
          Work
        </WorkTitle>
      </Wrapper>
      </ColumnWork>
    </Main>
  )
}

export default Hero

const Main = styled.div`
  height: 100vh;
  width: 90vw;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
`

const HeroBox = styled.section`
  background: white;
  color: black;
  height: 80vh;
  width: 50%;
  margin: 20px;
  padding: 2rem;
  box-sizing: border-box;
`
const ColumnWork = styled.section`
  width: 10%;
  height: 80vh;
  background: white;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 1rem 0;
  box-sizing: border-box;
  cursor: pointer;
`
const WorkTitle = styled.h1`
  color: black;
  -webkit-transform: rotate(270deg);   
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
`
const Description = styled.h3`
  color: gray;
  -webkit-transform: rotate(270deg);   
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  font-weight: normal;
  font-size: .7rem;
  width: 200px;
  margin: 60px 0;
  
`
const Date = styled(Description)`
  width: 80px;
  display: flex;
  margin: 20px;
  padding: 20px;
  justify-content: flex-end;
`
const Wrapper = styled.div`
  margin: 4rem 0;
`