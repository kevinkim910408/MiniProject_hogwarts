/* Home.jsx */
import styled from "styled-components";

// Import Header Menu Components
import HeaderNavi from "../Components/HeaderNavi.jsx";
import Video from '../video/HarryPotter.mp4';



const Home = () => {
    return (
        <>
            {/* Header Menu : fixed Component */}
            <HeaderNavi></HeaderNavi>

            {/* background img => 동영상으로 바꿀 예정 */}
            <HomeMain>
                <BackVideo controls loop>
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

const BackVideo = styled.video`
    width: 100vw;
    position: absolute;
    @media screen and (max-aspect-ratio: 1219/685) {
       width: 100%;
       height: 100vh;
    }
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