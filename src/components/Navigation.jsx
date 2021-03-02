import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return(
    <NavBar>
      about
      skills
      work
      contact
    </NavBar>
  )
}

export default Navigation

const NavBar = styled.div`
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 0.9rem;
`