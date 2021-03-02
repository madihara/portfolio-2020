import React from 'react'
import styled from 'styled-components'


import {GrGraphQl, GrGatsbyjs} from 'react-icons/gr'
import {SiStyledComponents,SiJavascript} from 'react-icons/si'
import {DiCss3,DiReact,DiCodepen, DiIllustrator, DiNodejs, DiNpm, DiVisualstudio, DiPhotoshop} from 'react-icons/di'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'


const Skills = () => {
  return(
    <Wrapper>
      <FlexItem>
        <Paragraph>
          I am a frontend developer passionate about making mobile responsive websites with clean design. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
        </Paragraph>
      
        <Paragraph>
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
        </Paragraph>
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
`
const FlexItem = styled.div`
  display: flex;
  flex-flow: row wrap ;
  width: 45%;
  height: 100%;
  align-items:  flex-start;
  justify-content: center;
`
const Paragraph = styled.p`
  font-weight: thin;
  font-size: 1.1rem;
  padding: 0 2rem 0 0;
  margin-top: 0;
`
const Icon = styled.section`
  padding: 0 15px 15px 15px;
  font-size: 3rem;

`