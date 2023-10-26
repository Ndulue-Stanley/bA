import React from 'react'
import {styled} from 'styled-components'
import DashBoardSidebar from './DashBoardSidebar'
import DashboardHead from './DashboardHead'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <div>
        
   <Container>
    <DashboardHead/>
    <DashBoardSidebar/>
    <Wrapper>
        <Outlet/>
    </Wrapper>
   </Container>
        
        </div>
  )
}

export default DashBoardLayout

const Wrapper = styled.div`
width: calc(100% - 250px);
transition: all 350ms;
display: flex;
background-color: #f1f1f1;
margin-top: 90px;
justify-content: center;
align-items: center;
`
const Container = styled.div`
/* background-color: yellow; */
transition: all 350ms;
width: 100%;
display: flex;
min-height: 100vh;
justify-content: flex-end;
`