import React from 'react'
import {styled} from 'styled-components'
import data from '../Components/Data.json'
import Card from '../Props/Card'

const UserHome = () => {
  return (
    <div>
       <Container>
        <Wrapper>
          <Holder>
          {
            data.map((props)=>(
        <Card
        revenue= {props.Revenue}
        Amount={props.Amount}
        NavText={props.NavText}
        Percent={props.Percent}
        />

            ))
          }
          </Holder>
        </Wrapper>
       </Container>
        
        </div>
  )
}

export default UserHome;

const Holder = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 50px;
/* background-color: red; */
`
const Wrapper = styled.div`
width: 97%;
height: 100%;
background-color: white;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
