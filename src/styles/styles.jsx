import styled from 'styled-components'



export const Main = styled.div`
  height: 100vh;
  width: 97%;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
`
export const ColumnWork = styled.section`
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
export const WorkTitle = styled.h1`
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
export const Description = styled.h3`
  color: gray;
  -webkit-transform: rotate(270deg);   
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  transition-property: font-size;
  transition-duration: .6s;
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
      top: 40px;
      left: 40px;
      font-size: 3rem;
      font-family: 'Abril Fatface', cursive;
      width: 100%;
      margin: 0;
      color: red;
    `
  }
  
`
export const Date = styled(Description)`
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
export const Wrapper = styled.div`
  margin: 4rem 0;
`

export const Image = styled.img`
  display: none;
  

  ${({active})=> 
  active &&`
    display: block;
    width: 60%; 

  `}
`

export const Info = styled.section`
  display: none;
  /* visibility: hidden;
  transition: 3s;
  transition-property: visibility; */
  ${({active})=> 
  active &&`
    display: flex;
    color: black;
    font-size: .8rem;
    width: 70%;
    padding: 20px 0;
    // visibility: visible;
  `}
`

export const Link = styled.a`
  display: none;
  color: black;

  ${({active}) => 
    active &&
    `display: block;`
  }
`

export const HiddenSection = styled.section`
  display: none;
  
  

  ${({active}) => 
    active &&
    `display: flex;
    color: black;
    `
  }
`
export const Column = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 15px;

`
export const Icon = styled.a`
  font-size: 2rem;
  margin: 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;
`


export const Scroll = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  color: white;
  display: flex;
`

export const Dot = styled.section`
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