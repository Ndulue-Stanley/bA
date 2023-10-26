import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Header = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <NavLink to = '/' style={{textDecoration: 'none'}}>
                    <Logo>Valerian</Logo>
                    </NavLink>
                    <NavHold>
                        <Nav>Home </Nav>
                        <Nav>About</Nav>
                        <Nav>Contact </Nav>
                        <Nav>Features</Nav>
                    </NavHold>
                    <ButtonHold>
                       <NavLink to= '/sign-in' style={{textDecoration: 'none'}}>
                       <Button>
                            Get Started
                        </Button>
                       </NavLink>
                    </ButtonHold>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Header;

const Button = styled.button`
cursor: pointer;
width: 150px;
padding: 15px 0px;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 10px;
`
const ButtonHold = styled.div``
const Nav = styled.div`
font-size: 20px;
font-weight: 500;
`
const NavHold = styled.div`
width: 30%;
display: flex;
justify-content: center;
align-items: center;
gap: 39px;
`
const Logo = styled.div`
font-size: 30px;
font-weight: 800;
`
const Wrapper = styled.div`
width: 90%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 80px;
background-color: aqua;
display: flex;
justify-content: center;
align-items: center;
`