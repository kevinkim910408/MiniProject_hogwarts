/* House.jsx */

/* Import */
import { useState } from "react";
import styled from "styled-components";
import CharacterCard from '../Components/CharacterCard.jsx';
import { FlexRowDiv, FlexColumnDiv, animationFadeInOut } from "../Components/GlobalStyled/CommonStyled.jsx";
import HeaderNavi from "../Components/HeaderNavi.jsx";

// Import imgs
import B1 from '../img/B1.jpg';
import B2 from '../img/B2.jpg';
import B3 from '../img/B3.jpg';
import B4 from '../img/B4.jpg';

// 숫자열, 문자열 관리
const HOUSE_ANIMATION_TIME = '2s'
const URL = 'http://hp-api.herokuapp.com/api/characters/house/';
const SCROLL_VALUE_Y = 500;

const House = () => {
    // 모든 해리포터 케릭터를 관리해줄 state
    const [characters, setCharacters] = useState([]);
    // url제일뒤에 붙혀서 하우스 를 판별해줄 변수
    //const [house,setHouse] = useState(""); 
    let house = "";

    // 버튼 이미지
    const imgs = [B1, B2, B3, B4];

    // url을 가져오는 함수
    const getCharacters = async () => {
        // url에서 response 받아서 json data로 
        const data = await (await fetch(`${URL}${house}`)).json
        // url
        // 새 배열 만들어서
        let newArr = [];

        // 위에서 data 받은거 새 배열에 보관
        newArr = data.map((value) => value);
        // 배열에 들어있는거 케릭터 state에 넣어줌
        setCharacters(newArr)
    }

    // 전체적인 카드를 보여줄 변수
    const ShowCharacters = characters.map((value, index) => (<CharacterCard characters={characters} key={index} num={index} />))

    // 버튼 클릭 이벤트
    const ClickEventHandler = (e) => {
        const emptyArr = [];
        setCharacters(emptyArr);
        // 하우스에 id값을 넣어줌
        //const houseID = e.target.id;
        //setHouse(houseID);
        house = e.target.id;


        // url에서 데이터 가져오는 이벤트 시작
        getCharacters();
        handleScroll();
    }

    // 클릭하면 스크롤  내려감
    const handleScroll = () => {
        window.scrollTo(0, SCROLL_VALUE_Y);
    }

    return (
        <>
            {/* Header Menu : fixed Component */}
            <HeaderNavi />
            <Wrap>
                <ContentsWrap>
                    <HouseWrap>
                        {/* 하우스 이름은 url 뒤에 붙여야 하기 때문에 그냥 각 기숙사 이름으로 */}
                        <HouseButton onClick={ClickEventHandler} id={"gryffindor"} style={{ backgroundImage: `url(${imgs[0]})` }} />
                        <HouseButton onClick={ClickEventHandler} id={"Slytherin"} style={{ backgroundImage: `url(${imgs[1]})` }} />
                        <HouseButton onClick={ClickEventHandler} id={"Ravenclaw"} style={{ backgroundImage: `url(${imgs[2]})` }} />
                        <HouseButton onClick={ClickEventHandler} id={"Hufflepuff"} style={{ backgroundImage: `url(${imgs[3]})` }} />
                    </HouseWrap>
                    <CharactersWrap>
                        {ShowCharacters}
                    </CharactersWrap>
                </ContentsWrap>
            </Wrap>
            <div style={{ height: "500px" }}></div>
        </>
    )
}

export default House;

// styled components
const Wrap = styled.div`
  width: 90%;
  min-width: 1300px;
  margin: 60px auto;
`;

const ContentsWrap = styled(FlexColumnDiv)`
    width: 100%;
    height: 100%;
`;

const HouseWrap = styled(FlexRowDiv)`
    width: 100%;
    height: 100%;
`;


const HouseButton = styled.div`
    width: 100%;
    height: 95vh;
    background-size: 100% 100%;
    filter: brightness(50%);
    &:hover{
        filter: brightness(100%);
    }
    border: none;
    animation: ${animationFadeInOut} ${HOUSE_ANIMATION_TIME};
`;

const CharactersWrap = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    grid-gap: 10px;
    padding: 20px;
`;
