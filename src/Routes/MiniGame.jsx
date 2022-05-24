/* MiniGame.jsx */

// Components
import Board from "../Components/Board"
import Keyboard from "../Components/Keyboard"
import HeaderNavi from '../Components/HeaderNavi'
import { boardDefault } from '../Components/Words';

//Hooks
import { createContext, useState } from 'react';
export const AppContext = createContext();

const MiniGame = () =>{
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos: 0})
    
    const onSelectLetter = (keyVal) => {
        if(currAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard)
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
    }

    const onDelete = () => {
        if(currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard)
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
     }

    const onEnter = () => { 
        if(currAttempt.letterPos !== 5) return;
        setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos : 0})
    }

    return(
        <>
            <HeaderNavi />
            <div className="App">
                <nav>
                    <h1>PUZZLE</h1>
                </nav>
                <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter}}>
                    <div className="game">
                        <Board />
                        <Keyboard />
                    </div>
                </AppContext.Provider>
            </div>
        </>
    )
}

export default MiniGame;