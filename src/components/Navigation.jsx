import React from 'react'
import styled from 'styled-components'

import {AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai'

const Navigation = () => {
  return(
    <NavBar>
      <Link
        target="_blank"
        href="http://www.github.com/madihara">
        <AiFillGithub />
      </Link>
      <Link 
        target="blank"
        href="http://www.twitter.com/madisonharadine">
        <AiOutlineTwitter/>
      </Link>
      <Link
        target="blank"
        to="madisonharadine@gmail.com">
        <AiOutlineMail />
       </Link>
    </NavBar>
  )
}

export default Navigation

const NavBar = styled.div`
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 2rem 0 0 ;
  font-size: 0.9rem;
  width: 100%;

  @media screen and (max-width: 900px) {
    justify-content: center;
  
  }
`

const Link = styled.a`
  margin: 0 10px;
  height: 50px;
  width: 50px;
  font-size: 30px;
  border-radius: 50%;
  background: #717171;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: .3s;

  &:hover{
    transform: scale(1.1);
  }
`