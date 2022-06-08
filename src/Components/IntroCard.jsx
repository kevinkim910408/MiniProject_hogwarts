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
                    <div className = "intro-card__title">{name}</div>
                    <div className = "intro-card__date">{date}</div>
                    <div className = "intro-card__text">
                       <p>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).</p>
                    </div>
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
  padding : 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageWrap = styled.div`  
    margin: 50px;
    /* padding : 50px; */
`;

const TextWrap = styled.div`
    font-size: 30px;
    width : 300px;
    color: var(--black);
    @media screen and (max-width: 900px) {
    display: none;
    }
`;