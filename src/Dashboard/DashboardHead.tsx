import React from 'react'
import {styled} from 'styled-components'

const DashboardHead = () => {
  return (
    <div>
      <Container>
      DashboardHead
      </Container>

    </div>
  )
}

export default DashboardHead

const Container = styled.div`
width: calc(100% - 250px);
height: 90px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 30p 10px 40px;
background-color: blue;
border-bottom: 1px solid #e4e3e3;
z-index: 3;
position: fixed;
color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`