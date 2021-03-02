import React from 'react'
import styled from 'styled-components'
import {Link} from './Styles'


import {GrGraphQl, GrGatsbyjs} from 'react-icons/gr'
import {SiStyledComponents,SiJavascript} from 'react-icons/si'
import {DiCss3,DiReact,DiCodepen, DiIllustrator, DiNodejs, DiNpm, DiVisualstudio, DiPhotoshop} from 'react-icons/di'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'


const Skills = () => {
  return(
    <Wrapper>
      <FlexItem style={{justifyContent: 'flex-start'}}>
        <Paragraph>
          I am a frontend developer passionate about making mobile responsive websites with clean design. I am entirely self-taught and pride myself on my discipline, motivation, and ability to transform a plain HTML document to a fully functioning, beautiful website.
        </Paragraph>
      
        <Paragraph>
          I am primarily a frontend javascript engineer, but dabble in backend technologies from time to time.  I love React, CSS-in-JS such as styled components, GraphQL, and playing around with CSS to find designs that are striking yet responsive.  I have a strong desire to learn d3js and expand my knowledge of node and databases. 
        </Paragraph>
        <Paragraph>I am currently accepting freelance work as well as offers for fulltime positions.  Please get in touch with me via email, text or call, or reach out to me on twitter!

        </Paragraph>
        <Link
          href='https://github.com/madihara/portfolio-2020'
          target="_blank"
          style={{display:'inline-block'}}
        >GitHub Repo for this site</Link>
      </FlexItem>
      <FlexItem >
        <Icon>
          <AiFillHtml5/>
        </Icon>
        <Icon>
          <DiCss3/>
        </Icon>
        <Icon>
          <SiJavascript/>
        </Icon>
        <Icon>
          <SiStyledComponents/>
        </Icon>

        <Icon>
          <DiReact />
        </Icon>
        <Icon>
          <GrGatsbyjs/>
        </Icon>
        <Icon>
          <GrGraphQl />
        </Icon>
        <Icon>
          <AiFillGithub/>
        </Icon>
        <Icon>
          <DiCodepen/>
        </Icon>
        <Icon>
          <DiNodejs />
        </Icon>
        <Icon>
          <DiNpm/>
        </Icon>
        <Icon>
          <DiVisualstudio />
        </Icon>
        <Icon>
          <DiPhotoshop />
        </Icon>
        <Icon>  
          <DiIllustrator/>
        </Icon>


      </FlexItem>
    </Wrapper>
  )
}

export default Skills

export const Wrapper = styled.div`
  padding: 1rem 6rem 4rem;
  margin-bottom: 4rem;
  color: white;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    padding: 1rem 3rem;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
  }
  
`
const FlexItem = styled.div`
  display: flex;
  flex-flow: row wrap ;
  width: 45%;
  height: 100%;
  align-items:  flex-start;
  justify-content: center;

  @media screen and (max-width: 950px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`
const Paragraph = styled.p`
  font-weight: thin;
  font-size: 1.1rem;
  padding: 0 2rem 0 0;
  margin-top: 0;

  @media screen and (max-width: 900px) {
    padding: 0;
    font-size: 0.8rem;
  }
`
const Icon = styled.section`
  padding: 0 15px 15px 15px;
  font-size: 3rem;

  @media screen and (max-width: 750px) {
    font-size: 1.6rem;
  }

`