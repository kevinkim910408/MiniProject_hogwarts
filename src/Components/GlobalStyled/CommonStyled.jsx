/* CommonStyled.jsx */
import CommonStyled, {keyframes} from 'styled-components';

export const FlexRowDiv = CommonStyled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FlexColumnDiv = CommonStyled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const animationFadeInOut = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;