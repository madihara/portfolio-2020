import React, {useState} from 'react'

import {Main, ColumnWork, WorkTitle, Description, Date, Wrapper, Image, Info, HiddenSection, Column, Link} from './Styles'

import {data} from '../variables/Data'


const DataRender = () => {
  const [active, setActive] = useState({name:'Madison Haradine'});
  console.log(active)
  return(
    <>
    <Main>
      {data.map((item, index)=>(
          <ColumnWork active={active.name === item.description}
          onClick={() => setActive({
            name: item.description })}>
          <div>
            <Date active={active.name === item.description}>{item.date}</Date>
          </div>
          <Wrapper active={active.name === item.description}>
            <Description active={active.name === item.description}>{item.description}</Description>
            <WorkTitle active={active.name === item.description} >{item.title}</WorkTitle>`

          </Wrapper>
          {item.image ? <Image active={active.name === item.description} src={item.image} /> : null}
          
          <Info active={active.name === item.description}>
            {item.info}
          </Info>
          <HiddenSection active={active.name === item.description}>
            {item.icons ? item.icons.map((icon, index) => (
              <Column>
                {icon.icon} {icon.name}
              </Column>
            )) : null}
          </HiddenSection>
          {item.link ? (
            <Link
            target="_blank" 
            active={active.name === item.description}
            href={item.link.linkhref}>{item.link.name}</Link>
          ) : null }
          </ColumnWork>
        ))}

        
    </Main>
    <div style={{color: 'red', position: 'absolute', bottom: '0', fontSize:'3rem'}}>SITE IS UNDER CONSTRUCTION</div>
    </>
  )
}


export default DataRender