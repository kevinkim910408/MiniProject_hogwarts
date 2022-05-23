/* IntroCard.jsx */

/* Import */
import styled from "styled-components";

import CardBG from '../img/CardBG.png'

const IntroCard = ({img, name, date}) => {

    return (
        <>
            <Card>
                <ImageWrap>
                    <img style={{width:'400px',height:'550px', margin:"50px auto", borderRadius:"30px"}} src={img} alt="" />
                </ImageWrap>
                <TextWrap>
                    <div>{name}</div>
                    <div>{date}</div>
                    <div>빈공간</div>
                </TextWrap>

            </Card>
        </>
    )
}

export default IntroCard;

const Card = styled.div`
  max-width: 1600px;
  width: 90%;
  min-height: 800px;
  background-image: url(${CardBG});;
  background-size: cover;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageWrap = styled.div`  
    margin: 50px;
`;

const TextWrap = styled.div`
    font-size: 30px;
    color: var(--black);
    @media screen and (max-width: 900px) {
    display: none;
    }
`;