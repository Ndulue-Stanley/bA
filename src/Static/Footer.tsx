import styled from "styled-components";

const Footer = () =>{
    return(
        <div>
            <Container>
                CopyRight Reserved
            </Container>
        </div>
    )
}

export default Footer;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80px;
`