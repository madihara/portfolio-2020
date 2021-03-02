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
        aboutme
      </FlexItem>
      <FlexItem style={{justifyContent: 'center'}}>
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
\
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

const Wrapper = styled.div`
  padding: 1rem 6rem 4rem;
  color: white;
  display: flex;
  justify-content: space-between;
`
const FlexItem = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 40%;
`
const Title = styled.h3`
  color: white;
`
const Icon = styled.section`
  padding: 0 15px 15px 15px;
  font-size: 3rem;
`