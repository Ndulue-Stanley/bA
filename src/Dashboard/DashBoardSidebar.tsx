import React from 'react'
import {styled} from 'styled-components'
import {FaAngleDown, FaHome, FaWpforms, FaChartPie, FaMapMarkerAlt} from 'react-icons/fa'
import {GrAppsRounded} from 'react-icons/gr'
import {TbCheese} from 'react-icons/tb'
import {MdToggleOff, MdAnimation, MdOutlineWidgets} from 'react-icons/md'
import {BsCardText} from 'react-icons/bs'
import {AiOutlineForm} from 'react-icons/ai'
import Icons from '../Props/Icons'

const DashBoardSidebar = () => {
  return (
    <div>
    <Container>
        <Wrapper>
            <Image>
                <Pic src = 'https://demo.dashboardpack.com/marketing-html/img/logo.png'/>
            </Image>
            <NavHolder>
              <Icons icon1={FaHome} text='Home' icon2={FaAngleDown}/>
              <Icons icon1={GrAppsRounded} text='Home' icon2={FaAngleDown}/>
              <Icons icon1={TbCheese} text='UI Kits' icon2={FaAngleDown}/>
              <Icons icon1={FaWpforms} text='Forms' icon2={FaAngleDown}/>
              <Icons icon1={FaHome} text='Icon' icon2={FaAngleDown}/>
              <Icons icon1={MdAnimation} text='Animations' icon2={FaAngleDown}/>
              <Icons icon1={MdToggleOff} text='Table' icon2={FaAngleDown}/>
              <Icons icon1={BsCardText} text='Cards' icon2={FaAngleDown}/>
              <Icons icon1={FaChartPie} text='Charts' icon2={FaAngleDown}/>
              <Icons icon1={MdOutlineWidgets} text='Widgets' icon2={FaAngleDown}/>
              <Icons icon1={ FaMapMarkerAlt} text='Maps' icon2={FaAngleDown}/>
              <Icons icon1={AiOutlineForm} text='Pages' icon2={FaAngleDown}/>
            </NavHolder>
        </Wrapper>
  
      </Container>

    </div>
  )
}

export default DashBoardSidebar;


const Pic  = styled.img``

const NavHolder  = styled.div`
width: 100%;
padding: 10px 10px 10px 0px;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
flex-direction: column;
`
const Image  = styled.div``
const Wrapper  = styled.div`
height: 90%;
`
const Container = styled.div`
width: 250px;
height: 100%;
/* background-color: white; */
position: fixed;
top: 0;
left: 0;
overflow-y: auto;
transition:  all 500ms;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`