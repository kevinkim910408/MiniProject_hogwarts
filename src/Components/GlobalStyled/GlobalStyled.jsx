/* GlobalStyle.jsx */
import { createGlobalStyle} from 'styled-components'; 
import { normalize } from "styled-normalize"; 
import BG from "../../img/bg.jpg";

const GlobalStyle = createGlobalStyle `
${normalize} // normalize

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100vh;
    background-image: url(${BG});
    background-position: center;
    background-size: 100% 100%;
    background-attachment: fixed;
    // 스크롤 삭제 - 기능은 있음
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
}

:root {
    --purple: #8e44ad;
    --grey: #bdc3c7;
    --yellow: #fff200;
    --pink: #ffcccc;
    --orange: #ff9f1a;
    --white: #fff;
    --black: #000;
}
`;

export default GlobalStyle;