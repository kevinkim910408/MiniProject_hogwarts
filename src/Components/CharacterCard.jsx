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
                    <div>{characters[num].name}</div>
                    <div>{characters[num].house}</div>
                    <div>{characters[num].dateOfBirth}</div>
                    <div>{characters[num].ancestry}</div>
                    <div>{characters[num].patronus}</div>
                </MiddleTextWrap>
                <MiddleTextWrap>
                    <div>{characters[num].wand.core}</div>
                    <div>{characters[num].wand.length}</div>
                    <div>{characters[num].wand.wood}</div>
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 450px;
    background-color: black;
    padding: 10px;
    color: white;
    border-radius: 30px;
    animation: ${animation} 0.5s;
`;

const MiddleTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
`;

