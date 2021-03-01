import React, {useState} from 'react'

import {Main, ColumnWork, WorkTitle, Description, Date, Wrapper, Image, Info, HiddenSection, Column, Link} from './MainSection'

import {data} from '../variables/Data'


const DataRender = () => {
  const [active, setActive] = useState({name:'about'});
  console.log(active)
  return(
    <Main>
      {data.map((item, index)=>(
          <ColumnWork active={active.name === item.description}
          onClick={() => setActive({
            name: item.description })}>
          <div>
            <Date active={active.name === item.description}>{item.date}</Date>
          </div>
          <Wrapper>
            <Description active={active.name === item.description}>{item.description}</Description>
            <WorkTitle active={active.name === item.description} >{item.title}</WorkTitle>`

          </Wrapper>
          <Image active={active.name === item.description} src={item.image} />
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
            active={active.name === item.name}
            href={item.link.linkhref}>{item.link.description}</Link>
          ) : null }
          </ColumnWork>
        ))}
    </Main>
  )
}




export default DataRender