/* Home.jsx */
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Import Header Menu Components
import HeaderNavi from "../Components/HeaderNavi.jsx";
import Video from '../video/HarryPotter.mp4';

const Home = () => {

    const [enter, setEnter] = useState(false);

    const videoHandler = () => {
        setEnter(true);
    };

    const vidRef=useRef();

    // 오토플레이
    useEffect(() => { 
        vidRef.current.play(); 
    },[]);

    return (
        <>
            {/* Header Menu : fixed Component */}
            <HeaderNavi></HeaderNavi>
            {/* background img => 동영상으로 바꿀 예정 */}

            <HomeMain onMouseOver = {videoHandler} >
                <BackVideo controls loop ref={ vidRef }>
                    <source src={Video} type="video/mp4"></source>
                </BackVideo>
            </HomeMain>
        </>
    )
}

export default Home;

const HomeMain = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;

// const Spell = styled.button`
//   z-index : 2;
//   position : absolute;
//   top : 45%;
//   left : 45%;
//   color : white;
//   font-size: 50px;
//   background: none;
//   border : none;
// `

const BackVideo = styled.video`
    object-fit: scale-down;
    /* position: fixed; */
    /* @media screen and (max-aspect-ratio: 1219/685) {
       width: 100%;
       height: 100vh;
    } */
    &::-webkit-media-controls-fullscreen-button {
        display: none !important;
    };
    &::-webkit-media-controls-play-button {
        display: none !important;
    };
    &::-webkit-media-controls-current-time-display {
        display: none !important;
    };
    &::-webkit-media-controls-timeline {
        display: none !important;
    };
    &::-webkit-media-controls-time-remaining-display {
        display: none !important;
    };
    &::-webkit-media-controls-mute-button {
        display: none !important;
    };
    &::-webkit-media-controls-volume-slider {
        display: none !important;
    };
`;