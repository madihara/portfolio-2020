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
    I am currently a lead Frontend Engineer at Viewrail building out our internal administrative and sales softwares with a focus on tooling that simplifies our process from first customer contact through final sale and installation.

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
    padding: 1rem 1.3rem;
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
