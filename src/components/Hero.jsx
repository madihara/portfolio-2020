import React, {useState} from 'react'
import styled from 'styled-components'
import jpc from '../images/jpc.png'
import wakeside from '../images/wakeside.png'
import portfolio from '../images/old-portfolio.png'
import css from '../images/cssboston.png'

import {FaReact} from 'react-icons/fa'
import {SiStyledComponents, SiGatsby, SiGraphql} from 'react-icons/si'
import {AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import {GrGithub, GrTwitter} from 'react-icons/gr'


const Hero = () => {

  const [active, setActive] = useState({name:'about'});
  console.log(active)

  return(
    <Main>
      <ColumnWork 
        active={active.name === 'about'}
        onClick={() => setActive({
          name: 'about' })}>
        <div>
          <Date
            active={active.name === 'about'}
          >Web Dev</Date>
        </div>
      <Wrapper>
        <Description
        active={active.name === 'about'}>
           Madison Haradine
        </Description>
        <WorkTitle active={active.name==='about'}>
          About
        </WorkTitle>
      </Wrapper>
      <Info 
      style={{width: '90%'}}
      active={active.name==='about'}>
      I'm a passionate Front End Developer and lover of React. I have experience using modern HTML, CSS, and JavaScript to create responsive, user focused websites.<br></br><br></br>

I also have a big desire to extend my knowledge to the backend and have dabbled with Nodejs and Express. I am particularly fond of GraphQL, interested in data visualization, and eager to learn about cloud computing.<br></br><br></br>

When I'm not building webpages, I love to spend time with my dog, stay active boxing and playing in Co-Ed sports leagues, and improve my cooking and baking skills. I'm often spotted surfing, paddleboarding, or otherwise enjoying the water and the outdoors.<br></br><br></br>
      </Info>
      <HiddenSection active={active.name==='about'}>
      <p style={{color: 'red'}}>SITE IS UNDER CONSTRUCTION</p>
      </HiddenSection>
      
      <HiddenSection 
      active={active.name==='about'}>
        <Icon target="_blank" href="https://github.com/madihara"><AiFillGithub/></Icon>
        <Icon target="_blank" to="madisonharadine@gmail.com"><AiOutlineMail/></Icon>
        <Icon target="_blank" href="https://twitter.com/madisonharadine"><GrTwitter/></Icon>
      </HiddenSection>
      <HiddenSection active={active.name==='about'}>
      Contact me at madisonharadine@gmail.com or (734)474-1893.
      </HiddenSection>
      </ColumnWork>



      <ColumnWork 
        active={active.name === 'jpc'}
        onClick={() => setActive({
          name: 'jpc' })}>
        <div>
          <Date active={active.name === 'jpc'}>2019-2021</Date>
        </div>
      <Wrapper>
        <Description active={active.name === 'jpc'}>
          JPC Commercial Sewing 
        </Description>
        <WorkTitle active={active.name === 'jpc'}>
          Work
        </WorkTitle>
      </Wrapper>
      
      <Image 
        src={jpc} alt='Jpc Commercial Sewing Company' 
        active={active.name === 'jpc'}/>
      <Info active={active.name === 'jpc'}>
      A mobile responsive website designed and developed for a client. I was the sole designer, developer and worked closely with the owner as the content writer. I also used basic Photoshop to enhance the professionalism of the photos in his portfolio.
      </Info>
      <HiddenSection
        active={active.name === 'jpc'}>
      <Column>
        <FaReact/>
        React
      </Column>
      <Column>
        <SiGatsby/>
        Gatsby
      </Column>
      <Column>
        <SiGraphql/>
        GraphQL
      </Column>
      <Column>
        <SiStyledComponents/>
        Styled Components
      </Column>
      <Column style={{alignSelf: 'flex-end'}}>
      ContentfulCMS
      </Column>
      
      </HiddenSection>
      <Link 
        target="_blank"
        active={active.name ==='jpc'}
        href='http://www.jpccustom.com'>View Live</Link>
      </ColumnWork>
      <ColumnWork 
        active={active.name === 'wakeside'}
        onClick={() => setActive({
                name: 'wakeside'
              })}>
        <div>
          <Date active={active.name === 'wakeside'}>2019-2021</Date>
        </div>
      <Wrapper>
        <Description active={active.name === 'wakeside'}>
          WakeSide Marine 
        </Description>
        <WorkTitle active={active.name === 'wakeside'}>
          Work
        </WorkTitle>
      </Wrapper>
      <Image 
        src={wakeside} alt='Wakeside marine company' 
        active={active.name === 'wakeside'}/>
     <Info active={active.name === 'wakeside'}>
      A Gatsby site I am working on for a client.  It is in the early stages of development and mobile responsiveness has not been developed yet, but is coming.  I am in charge of design and development of the entire site and will be setting up a CMS of the client's choosing using GraphQL as the querying language.
      </Info>
      <Link
        target="_blank" 
        active={active.name ==='wakeside'}
        href='https://reverent-montalcini-a70fee.netlify.app/'>View Live</Link>
      </ColumnWork>
      <ColumnWork
        active={active.name === 'portfolio'} 
        onClick={() => setActive({
          name: 'portfolio'})}>
        <div>
          <Date  active={active.name === 'portfolio'}>2020-2021</Date>
        </div>
      <Wrapper>
        <Description  active={active.name === 'portfolio'}>
          Portfolio 
        </Description>
        <WorkTitle  active={active.name === 'portfolio'}>
          Work
        </WorkTitle>
      </Wrapper>
      <Image 
        src={portfolio} alt='Old Portfolio Website' 
        active={active.name === 'portfolio'}/>
      <Info active={active.name === 'portfolio'}>
      A mobile responsive site designed and developed using CSS Modules and React.
      </Info>
      <Link
        target="_blank" 
        active={active.name ==='portfolio'}
        href='https://codepen.io/madihara/pen/bGGPLBP'>View Live</Link>
      </ColumnWork>
      <ColumnWork
        active={active.name === 'css'} 
        onClick={() => setActive({
          name: 'css'})}>
        <div>
          <Date active={active.name === 'css'}>2019</Date>
        </div>
      <Wrapper>
        <Description active={active.name === 'css'}>
          CSS Art 
        </Description>
        <WorkTitle active={active.name === 'css'}>
          Work
        </WorkTitle>
      </Wrapper>
      <Image 
        src={css} alt='Boston Terrier' 
        active={active.name === 'css'}/>
      <Info active={active.name === 'css'}>
      While learning CSS I decided to take on a fun side project and make a pure CSS image of my dog.
      </Info>
      <Link
        target="_blank" 
        active={active.name ==='css'}
        href='https://codepen.io/madihara/pen/bGGPLBP'>CodePen</Link>
      </ColumnWork>

    </Main>
  )
}

export default Hero

const Main = styled.div`
  height: 100vh;
  width: 97%;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
`
const ColumnWork = styled.section`
  width: 8%;
  height: 80vh;
  background: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 1rem 0;
  box-sizing: border-box;
  cursor: pointer;
  transition:.5s ease-out;
  position: relative;
  /* -webkit-transform: rotate(270deg);   
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg); */


  ${({ active }) =>
    active &&
    `
    width: 80%;
    justify-content: flex-start;
    align-items:center;
    cursor: auto;
  `}
`
const WorkTitle = styled.h1`
  color: black;
  -webkit-transform: rotate(270deg);   
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  transition-delay:.2s;


  ${({active}) =>
    active &&`
      display: none;
    `
  }
`
const Description = styled.h3`
  color: gray;
  -webkit-transform: rotate(270deg);   
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  /* transition-delay: .2s; */
  font-weight: normal;
  font-size: .7rem;
  width: 200px;
  margin: 60px 0;

  ${({active}) =>
    active &&`
      -webkit-transform: rotate(0deg);   
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      position: absolute;
      top: 60px;
      left: 40px;
      font-size: 3rem;
      font-family: 'Abril Fatface', cursive;
      width: 100%;
      margin: 0;
    `
  }
  
`
const Date = styled(Description)`
  width: 80px;
  display: flex;
  margin: 20px;
  padding: 20px;
  justify-content: flex-end;

  ${({active}) =>
    active &&`
      display: none;
    `
  }
`
const Wrapper = styled.div`
  margin: 4rem 0;
`

const Image = styled.img`
  display: none;
  transition: 6s;

  ${({active})=> 
  active &&`
    display: block;
    height: 200px; 

  `}
`

const Info = styled.section`
  display: none;

  ${({active})=> 
  active &&`
    display: flex;
    color: black;
    font-size: .8rem;
    width: 70%;
    padding: 20px 0;
  `}
`

const Link = styled.a`
  display: none;
  color: black;

  ${({active}) => 
    active &&
    `display: block;`
  }
`

const HiddenSection = styled.section`
  display: none;
  
  

  ${({active}) => 
    active &&
    `display: flex;
    color: black;
    `
  }
`
const Column = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 15px;

`
const Icon = styled.a`
  font-size: 2rem;
  margin: 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;
`