import React from 'react'
import styled from 'styled-components'

const ScrollBar = () => {
  return(
    <>
    <Scroll>
      <Dot active='active'/>
      <Dot />
    </Scroll>
    </>
  )
}

export default ScrollBar

const Scroll = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  color: white;
  display: flex;
`

const Dot = styled.section`
  height: 15px;
  width: 15px;
  margin: 10px 2px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid white; 

  ${({active}) =>
    active &&`
      background-color: white;
    `
  }
`