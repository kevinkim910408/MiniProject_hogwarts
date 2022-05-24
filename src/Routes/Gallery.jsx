/* Gallery.jsx */
import styled from "styled-components";

/* Image Import*/
import G1 from '../img/G1.png';
import G2 from '../img/G2.png';
import G3 from '../img/G3.png';
import G4 from '../img/G4.png';
import G5 from '../img/G5.png';
import G6 from '../img/G6.png';
import G7 from '../img/G7.png';
import G8 from '../img/G8.png';
import G9 from '../img/G9.png';
import G10 from '../img/G10.png';
import G11 from '../img/G11.png';
import G12 from '../img/G12.png';
import G13 from '../img/G13.png';
import G14 from '../img/G14.png';
import G15 from '../img/G15.png';
import G16 from '../img/G16.png';
import G17 from '../img/G17.png';
import G18 from '../img/G18.png';
import G19 from '../img/G19.png';
import G20 from '../img/G20.png';
import G21 from '../img/G21.png';
import G22 from '../img/G22.png';
import G23 from '../img/G23.png';
import G24 from '../img/G24.png';
// Import Header Menu Components
import HeaderNavi from "../Components/HeaderNavi.jsx";

const Gallery = () => {
    return (
        <>
            <HeaderNavi />
              <PhotoContainer>
                {/* 갤러리 제목 파트, 배경 이미지를 양피지 재질이나 신문 재질로 바꿀까 고려중 */}
                <div style={{height : '100px', display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center', fontSize : '30px', marginBottom : '100px'}}>
                    <h1>Gallery</h1>
                    <p>You can see all the photos in here</p>
                </div>
                {/* 벽돌식으로 사진 쌓이는 부분, gif 파일과 텍스트 중간중간 삽입할 예정 */}
                <Wrapper>
                    <PhotoWrap><PotterImg src={G1} alt="" /></PhotoWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '50px'}}>Harry and Ron are late</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src={G2} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G3} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G4} alt="" /> </PhotoWrap>
                    <PhotoWrap><PotterImg src={G5} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G6} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G7} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G8} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G9} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G10} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G11} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G12} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G13} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G14} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G15} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G16} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G17} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G18} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G19} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G20} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G21} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G22} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G23} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G24} alt="" /></PhotoWrap>
                  </Wrapper>
                </PhotoContainer>

        </>
    )
}

const PhotoContainer = styled.div`
  margin-top : 60px;
  padding : 50px;
  background-color: #ede7dc;
`;

const Wrapper = styled.div`
    column-count: 4;
    column-gap: 2em;
`;

const PhotoWrap = styled.div`
  display: inline-flex;
  width : 100%;
  margin-bottom : 2rem;
  border-radius : 10px;
  overflow : hidden;
  will-change: transform;
  &:hover { transform: scale(1.1); box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; transition-timing-function: ease-in-out; }
`;

const PotterImg = styled.img`
  width : 100%;
  height : 100%;
  object-fit : cover;
`;

const TextWrap = styled.div`
  display: inline-flex;
  width : 100%;
  margin-bottom : 2rem;
  border-radius : 10px;
  overflow : hidden;
`;

const TextBox = styled.div`
  width : 100%;
  height : 100%;
  object-fit : cover;
`; 


export default Gallery;
