import React, {useState} from 'react'

import {Main, ColumnWork, WorkTitle, Description, Date, Wrapper, Image, Info} from './MainSection'

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
            <Date>{item.date}</Date>
          </div>
          <Wrapper>
            <Description>{item.description}</Description>
            <WorkTitle >{item.title}</WorkTitle>`

          </Wrapper>
          <Image src={item.image} />
          <Info>
            {item.info}
          </Info>
          </ColumnWork>
        ))}
    </Main>
  )
}




export default DataRender