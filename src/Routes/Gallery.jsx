/* Gallery.jsx */
import styled from "styled-components";
import '../Components/GlobalStyled/GlobalStyled.module.css';

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
                    <h1 className = "galley_text" style = {{ fontSize : "80px", margin : '30px' }}>Gallery</h1>
                    <p className = "galley_text" >You can see all the photos in here</p>
                </div>
                {/* 벽돌식으로 사진 쌓이는 부분, gif 파일과 텍스트 중간중간 삽입할 예정 */}
                <Wrapper>
                    <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src="https://4.bp.blogspot.com/-vvNaDMSwdTE/WD2OhH-qM-I/AAAAAAAAGlo/DicgoGeb1YYYt6ssDjqPBq_AivOQQG8dgCEw/s1600/sri1.gif" alt="" /></PhotoWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '30px'}}>Miss you, Sirius</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMjAy/MDAxNjEzNDY3ODE1NzEy.Kx8kLUZefkvxfZF23ArTn6tmCDxFhyN7sg8ToQhkPSIg.EXKT-F7CSUDqov892SynjR2BaUIJdrjBv7LWW88gniog.JPEG.sopia3139/IMG_5953.JPG?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src={G1} alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '1rem'}}><TextBox style={{fontWeight : '800', fontSize : '30px'}}>Oooooops, They're Late at Schoool!</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  textAlign : 'end', fontWeight : 'normal'}}>XUCKIN DOBBY, I'LL KILL THAT ELF!</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/20151003_261/gdprincess03_1443867217325BqbPM_GIF/https3A2F2F33.media.tumblr.com2F37be71e2287b1c00a4f4ddc8d743622a2Ftumblr_nv.gif?type=w420" alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMjQw/MDAxNjEzNDcwMzg4NTA0.OltDccPKmhkOUwZMkddIT4eXMek0r1AyrA0HYwpwHNcg.z9ye8iTFIE2AbmafP6gWMtj3_-WlZBfnZq4mJGrr6VMg.JPEG.sopia3139/output_66068587.jpg?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap><PotterImg src="https://1.bp.blogspot.com/-g6acfQ8NfxI/WD2RW2449pI/AAAAAAAAGmA/Dh-29xAhZYcQGY4hJbdOrhQDjR-a_MYTACLcB/s1600/remussirius2.gif" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '25px'}}>Hope to meet you again</TextBox></TextWrap>
                    <TextWrap style = {{ marginBottom : '1rem'}}><TextBox style={{fontWeight : '800', fontSize : '50px'}}>My Sirius!</TextBox></TextWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  textAlign : 'end', fontWeight : 'normal'}}>How can I let you go, Serious.</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  textAlign : 'end', fontWeight : 'normal'}}>I DO really hope to meet u again. luv you, Serous. luv you, my Father.</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMTI0/MDAxNjEzNDY3ODE1Mzcz.W3lIYf6wlA-1p_bYtH5sIZHQISmdnkNbMMYedFiHF6wg.uTwQpVQnj6VTCfprimpNd-PuGQRepyKDQViu9wLcBkMg.JPEG.sopia3139/IMG_5951.JPG?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap><PotterImg src="https://gif5jvqbd.fmkorea.com/files/attach/new/20161108/486616/44393101/504995967/373f7b85e586f0810bbd9199f3164d5f.gif" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '40px', textAlign : 'end'}}>Original Books 4 SALE</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  textAlign : 'end', fontWeight : 'normal'}}>You can buy HarryPotter series with original book cover from Mundungus!</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src={G3} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G4} alt="" /> </PhotoWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '40px', textAlign : 'end'}}>I'll fight you!</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMTg1/MDAxNjEzNDc0ODgxODI0.KrfR7K0W_b8ZrsPJPWBd0T3lei9az8xqjAXfLOspwXog.O2zYhAKK6V8fyhTjDgfN_6_6-vHJDxL_pKYrRHcBhiIg.JPEG.sopia3139/output_652275821.jpg?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap><PotterImg src={G11} alt="" /></PhotoWrap>
                    <PhotoWrap style = {{ marginBottom : '0'}}><PotterImg src="https://gif5jvqbd.fmkorea.com/files/attach/new/20151231/486616/44393101/282964281/8c84961c6a53c80daa775e40f10dc3ba.gif" alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/20151003_266/gdprincess03_1443867241892bAnPd_GIF/https3A2F2F33.media.tumblr.com2F18b84651fb65d85e417cbbc6634ece5e2Ftumblr_nv.gif?type=w2" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '35px'}}>Best Scene Ever</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '25px', textAlign : 'end'}}>Wingardium Leviosa!</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src={G5} alt="" /></PhotoWrap>
                    <PhotoWrap style = {{ marginBottom : '1.5rem'}}><PotterImg src="https://mblogthumb-phinf.pstatic.net/20151003_151/gdprincess03_1443867232387CBEBx_GIF/https3A2F2F31.media.tumblr.com2Ff857a3e74356f6a187f1bdc0b2ae61302Ftumblr_nv.gif?type=w420" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '50px'}}>NEWS</TextBox></TextWrap>
                    <TextWrap style = {{ marginBottom : '1rem'}}><TextBox style={{fontWeight : '800', fontSize : '30px'}}>One of the most handsome Quidditch players by Forbes</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  fontWeight : 'normal'}}>Do not send Him any Fan-letters! Hogwarts is already full of OWL postman shit!</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src={G6} alt="" /></PhotoWrap>
                    <PhotoWrap style = {{ marginBottom : '1.5rem'}}><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMjM2/MDAxNjEzNDY3ODE4MTcy.vTWs1RUWus3CWAVETjq9e-Aepb2fPgGv4tPjQJCc4Pwg.p9ugr6qINgKbfSXFBKZ7YPGF5OTFfExWLKpPfb8KBuUg.JPEG.sopia3139/IMG_5954.JPG?type=w800" alt="" /> </PhotoWrap>
                    <TextWrap style = {{ marginBottom : '1rem'}}><TextBox style={{fontWeight : '800', fontSize : '50px', textAlign : 'end'}}>Spending Hard time</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  fontWeight : 'normal', textAlign : 'end'}}>
Dark Ages of the Wizarding World</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src={G8} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G7} alt="" /></PhotoWrap>
                    <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src="https://gif5jvqbd.fmkorea.com/files/attach/new/20161109/486616/44393101/504995967/054ad1c1fd480cf71eb74542bcb61fae.gif" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '50px', textAlign : 'end'}}>LEGENO</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  fontWeight : 'normal', textAlign : 'end'}}>RON WEASELY SAVED THE WORLD</TextBox></TextWrap>
                    <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src="https://gif5jvqbd.fmkorea.com/files/attach/new/20151231/486616/44393101/282964281/2d5e604171e1574d871b61ad92cd39be.gif" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '30px'}}>I'm Malfoy,</TextBox></TextWrap>
                    <TextWrap style = {{ marginBottom : '1rem'}}><TextBox style={{fontWeight : '800', fontSize : '42px'}}>Draco Malfoy</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  fontWeight : 'normal'}}>He was not that very Bad Boy. Just Weak boy, i guess.</TextBox></TextWrap>
                    <PhotoWrap style = {{ marginBottom : '0'}}><PotterImg src={G9} alt="" /></PhotoWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '40px'}}>James & Lily</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src={G17} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G10} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMjMz/MDAxNjEzNDcwMDc2NDQ4.oVrMOyc6Kr8siDapsWmwyij-D6vZF7kKjtPhlxwnY0og.k-BuaqmU-cqvbT3x-ogE8ZveWcCY7scdt_aYsn5maOQg.JPEG.sopia3139/output_4045334152.jpg?type=w800" alt="" /> </PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '30px'}}>Who drank all that poly juice?</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '42px', textAlign : 'end'}}>Hermione</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src="https://gif5jvqbd.fmkorea.com/files/attach/new/20161108/486616/44393101/504995967/41121bdeef68865a373188c0f28dda14.gif" alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTZfMjEg/MDAxNjE1ODIzMTQwNTkx.EqGPt8YLXDLGwZnjHE8bKg-2R_zBgtEBse4cjK17bbYg.ad-IQaSwPor7a_gcY9WwlLDMfDJAlRpgD4cwJ-HC8Msg.JPEG.sopia3139/IMG_8445.JPG?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src="https://gif5jvqbd.fmkorea.com/files/attach/new/20161108/486616/44393101/504995967/99b983892094b5c6d2fc3736e15da7d1_1.gif" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  fontWeight : 'normal'}}>Master has given Dobby a Sock. Master has presented Dobby with Clothes.</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '40px'}}>DOBBY IS FREEEE!</TextBox></TextWrap>
                    {/* <PhotoWrap><PotterImg src={G12} alt="" /></PhotoWrap> */}
                    <PhotoWrap><PotterImg src={G13} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://3.bp.blogspot.com/--U5FNpsra7Y/WD2NQZ5y0DI/AAAAAAAAGlc/nE0yH7ksI5c94A-F7_cgPb3nJwQAtNcZgCLcB/s1600/tumblr_neabmp7sHA1r4jwkdo3_500.gif" alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://gif5jvqbd.fmkorea.com/files/attach/new/20151231/486616/44393101/282964281/b3439678c70577c5c285b686966770d1.gif" alt="" /></PhotoWrap>
                    <TextWrap style = {{ marginBottom : '0'}}><TextBox style={{fontWeight : '800', fontSize : '20px'}}>Lily.. after all this Time?</TextBox></TextWrap>
                    <TextWrap style = {{ marginBottom : '1rem'}}><TextBox style={{fontWeight : '800', fontSize : '40px'}}>ALWAYS</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  fontWeight : 'normal'}}>He was the BRAVEST MAN I’ve ever known. I think He was the real HERO in HP series.</TextBox></TextWrap>
                    <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src={G14} alt="" /></PhotoWrap>
                    {/* <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src={G15} alt="" /></PhotoWrap> */}
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '40px'}}>CHEEEEERS</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src={G16} alt="" /></PhotoWrap>
                    <PhotoWrap style = {{ marginBottom : '1rem'}}><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMTUg/MDAxNjEzNDY3ODE3OTgw.0GwNfRFGuSD1MTF_ZfELgo80XucRVWqqr1Ygud_-GfAg.TDMGh69Z3Efa-2BwfZrc1K4-FJwcsCWsmGSFYZWjV5Eg.JPEG.sopia3139/IMG_5965.JPG?type=w800" alt="" /> </PhotoWrap>
                    <TextWrap style = {{ marginBottom : '1rem'}}><TextBox style={{fontWeight : '800', fontSize : '40px'}}>Cedric Diggory</TextBox></TextWrap>
                    <TextWrap><TextBox style={{fontWeight : '800', fontSize : '20px', fontFamily : 'initial',  fontWeight : 'normal'}}>We ALL thought that he was dead but he was a vampire..</TextBox></TextWrap>
                    <PhotoWrap><PotterImg src="https://social-phinf.pstatic.net/20211119_167/1637312164755z9mCy_GIF/1c1a1781ae3bce7131c06087e93d2e4ca70d7b89.gif" alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMTEw/MDAxNjEzNDY3ODE2Mjk4.C_SVFiD3CafdvITOWwZ47EMsMdfPM5Ld-0hhCrUOjJEg.T1KXMavDMhCdLcqOO5XbFWJLFWLZb1vhJq_QEtbaUsIg.JPEG.sopia3139/IMG_5964.JPG?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap><PotterImg src={G18} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G19} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://3.bp.blogspot.com/-CbSJyAAa6pI/WD2NKn7q_UI/AAAAAAAAGlU/pixUL2FKMdsLK7CgY9GvBG7paFJaaLmfACLcB/s1600/ls1.gif" alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G20} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMTM3/MDAxNjEzNDY3ODE5MTkw.pfisALTbTZZhZXOuk-2tGGTTgGk1LZMsxMprTk0zROYg.DnpMMWQZH77k1HB9W-c0WlzP-d2F1wEOcY4jX8-Avu8g.JPEG.sopia3139/IMG_5963.JPG?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap><PotterImg src={G21} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G24} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src={G22} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfNyAg/MDAxNjEzNDY3ODE2NTg1.yTWTXCOlSMZG9C9jPUCp9khtbquuGGBKyEPeyBzFtrMg.v5aaAM3_5UqkI3-nP7Iych9aGWdNPfh1aHlUxMTyEPgg.JPEG.sopia3139/IMG_5969.JPG?type=w800" alt="" /> </PhotoWrap>
                    <PhotoWrap><PotterImg src={G23} alt="" /></PhotoWrap>
                    <PhotoWrap><PotterImg src="https://2.bp.blogspot.com/-pTOymF8wOiM/WD2RYNKJIJI/AAAAAAAAGmM/m2tvmjXNreIA3xbez84kCSW9THRfQgZYgCLcB/s1600/sri3.gif" alt="" /></PhotoWrap>
                  </Wrapper>
                </PhotoContainer>

        </>
    )
}

// <IMG src="https://bunny.jjalbot.com/2016/10/r1WMyt6IC/88_55169dca4c601_1423.jpg" alt="" />

const PhotoContainer = styled.div`
  margin-top : 60px;
  padding : 50px;
  background-color: #ede7dc;
  font-family: 'Hahmlet', serif;
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
  &:hover { transform: scale(1.08); box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; transition-timing-function: ease-in-out; }
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
  font-family: 'Hahmlet', serif;
`; 


export default Gallery;
