import React from 'react'
import {styled} from 'styled-components'

import { IconType } from 'react-icons'

interface iProps {
  icon1 : IconType
  text : string
  icon2 : IconType
}

const Icons = ({icon1:Icon, text, icon2:Icon1}:iProps) => {

  return (
    <div>
        <Container>
           <Wrap>
           <Icns1><Icon/></Icns1>
            <Title>{text}</Title>
           </Wrap>
            <Icns2><Icon1/></Icns2>
        </Container>
    </div>
  )
}

export default Icons;

const Title = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
`
const Icns2 = styled.div``
const Icns1 = styled.div`
color: skyblue;
width: 40px;
height: 30px;
display: flex;
justify-content: center;
align-items : center;
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const Wrap = styled.div`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
`
const Container = styled.div`
width: 100%;
height: 100%;
padding: 10px 10px;
border-radius: 5px;
display: flex;
justify-content: space-between;
gap: 10px;
align-items: center;
`