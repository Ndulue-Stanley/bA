import {styled} from 'styled-components'

interface iProps {
    revenue: string;
    NavText: string;
    Amount : number;
    Percent: number
}

const Card = ({revenue, NavText, Amount, Percent}:iProps) => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Top>
                    <Hold>
                        <UpTxt>{revenue}</UpTxt>
                        <BtmTxt>${Amount}</BtmTxt>
                    </Hold>
                    <Nav>{NavText}</Nav>
                </Top>
                <Bottom>
                    <Numb>{Percent}%</Numb>
                    <Line/>
                </Bottom>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Card;

const Numb = styled.div`
width: 100%;
display: flex;
justify-content: right;
`
const Line = styled.div`
width: 300px;
border-radius: 10px;
height: 5px;
background-color: #508FF4;
display: flex;
justify-content: right;
`
const Nav = styled.div`
width: 15%;
height: 40%;
background-color: #508FF4;
margin-right: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
font-weight: 600;
border-radius: 5px;
`
const Bottom = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
flex-direction:  column;
align-items: center;
/* background-color: yellow; */
`

const BtmTxt = styled.div`
font-size: 30px;
font-weight: 600;
color: black;
`
const UpTxt = styled.div`
font-size: 17px;
font-weight: 600;
color: lightgray;
`
const Hold = styled.div`
margin-left : 30px;
`
const Top = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: firebrick; */
padding: 10px 0px;
color: lightgrey;
`
const Wrapper = styled.div`
width: 90%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: lightblue; */
flex-direction: column;
padding: 20px 10px;
border-radius: 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const Container = styled.div`
width: 100%;
height: 100%;
padding-left: 100px;
/* padding-right: 10px; */
/* background-color: red; */
`