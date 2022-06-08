/* Import */
import styled from "styled-components";
import { Link } from 'react-router-dom';
import LogoImg from '../img/pngegg.png';

const HeaderNavi = () => {

    return (
        <HeaderBar>
          {/* Logo Img 제작해서 넣을 예정 */}
          <HeaderMenu to={`/`}><img src = {LogoImg} style = {{ height : "60px", marginTop : "5px"}}/></HeaderMenu>
          {/* Heather Menu 파트별 네이밍 고민 */}
          <HeaderMenu to={`/house`}><span>PotterWiki</span></HeaderMenu>
          <HeaderMenu to={`/gallery`}><span>Gallery</span></HeaderMenu>
          <HeaderMenu to={`/IntroMovie`}><span>Book</span></HeaderMenu>
          <HeaderMenu to={`/MiniGame`}><span>Mini Game</span></HeaderMenu>
        </HeaderBar>
    )
};


// Header Menu Container Style
const HeaderBar = styled.div`
  position : fixed;
  top : 0;
  width : 100%;

  display : grid;
  grid-template-columns : repeat(5, 20%);
  grid-template-rows :  60px;
  place-items: center;

  background-color: black;
  z-index: 10;
`;
// Header Menu Fonts Style
const HeaderMenu = styled(Link)`
  text-decoration: none;
  color : white;
  font-size : 20px;
`;

export default HeaderNavi;