/* CharacterCard.jsx */

/* Import */
import styled, {keyframes } from "styled-components";

const CharacterCard = ({characters, num}) => {
    return (
        <>{
            // 만약 image가 "" 면 <></> 빈태그 띄워주면서 카드를 안보여줌
        characters[num].image === "" ? 
            <></> : 
            <Card>
                <div>
                    <img style={{width:"300px", height:"400px", borderRadius: "10%"}} src={characters[num].image} alt="" />
                </div>
                <MiddleTextWrap>
                    <ProfileText>{characters[num].name}</ProfileText>
                    <ProfileText>{characters[num].house}</ProfileText>
                    <ProfileText>{characters[num].dateOfBirth}</ProfileText>
                    <ProfileText>{characters[num].ancestry}</ProfileText>
                    <ProfileText>{characters[num].patronus}</ProfileText>
                    <WandProfile>
                        <Wand>{characters[num].wand.core}</Wand>
                        <Wand>{characters[num].wand.length}</Wand>
                        <Wand>{characters[num].wand.wood}</Wand>
                    </WandProfile>
                </MiddleTextWrap>
            </Card>
            }
        </>
    )
}

export default CharacterCard;

const animation = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

// styled-components
const Card = styled.div`
    display: flex;
    width: 100%;
    height: 450px;
    background-color: black;
    padding: 24px;
    color: white;
    border-radius: 30px;
    animation: ${animation} 0.5s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const MiddleTextWrap = styled.div`
    display : flex;
    flex-direction: column;
    margin-left: 30px;
`;

const ProfileText = styled.span`
    font-size : 18px;
    margin-bottom: 10px;
    &:nth-child(1) {
        margin-top: 50px;
        font-size : 38px;
        margin-bottom: 30px;
        text-shadow: 6px 6px 10px yellow;
    }
    &:nth-child(2) {
        font-size : 24px;
        margin-bottom: 50px;
    }
`

const WandProfile = styled.div`
     font-size : 18px;
     display: flex;
     justify-content: flex-start;
`

const Wand = styled.span`
    margin-right: 10px;
`