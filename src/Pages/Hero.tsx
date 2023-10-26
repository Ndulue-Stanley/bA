import styled from "styled-components";
import pix from '../Assets/pexels-photo-3802510.webp'

const Hero = () =>{
    return(
        <div>
            <Container>
                <TextHold>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis ipsam maiores qui libero culpa cumque nobis, sint minus hic!
                </TextHold>
                <ImgHold>
                <Pic src={pix}/>
                </ImgHold>
            </Container>
        </div>
    )
}

export default Hero;

const Pic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const ImgHold = styled.div`
width:50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const TextHold = styled.div`
width:50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 100%;
background-color: blanchedalmond;
display: flex;
justify-content: center;
align-items:center;
`