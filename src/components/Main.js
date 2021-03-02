import React, {useState} from 'react'

import {Main, ColumnWork, WorkTitle, Description, Date, Wrapper, Image, Info, HiddenSection, Column, Link, Scroll, Dot} from './Styles'
import {Title} from './About'

import {data} from '../variables/Data'


const DataRender = () => {
  const [active, setActive] = useState(0);
  console.log(active)
  return(
    <>
    <Title style={{textAlign:'center'}}>work</Title>
    <div style={{position: 'relative'}}>
    <Main>
      {data.map((item, index)=>(
          <ColumnWork active={active === index}
          onClick={() => setActive(
             index )}>
          <div>
            <Date active={active === index}>{item.date}</Date>
          </div>
          <Wrapper active={active === index}>
            <Description active={active === index}>{item.description}</Description>
            <WorkTitle active={active === index} >{item.title}</WorkTitle>

          </Wrapper>
          {item.image ? <Image active={active === index} src={item.image} /> : null}
          
          <Info active={active === index}>
            {item.info}
          </Info>
          <HiddenSection active={active === index}>
            {item.icons ? item.icons.map((icon, index) => (
              <Column>
                {icon.icon} {icon.name}
              </Column>
            )) : null}
          </HiddenSection>
          {item.link ? (
            <Link
            target="_blank" 
            active={active === index}
            href={item.link.linkhref}>{item.link.name}</Link>
          ) : null }
          </ColumnWork>
        ))}

        
    </Main>
    <Scroll>
    {data.map((item, index)=> {
      return(
        <Dot 
          onClick={() => setActive(index)}
          active={active === index} />
      )
    })}
    </Scroll>
    </div>
    </>
  )
}


export default DataRender