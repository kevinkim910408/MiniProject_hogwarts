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
    return(
        <>
            <HeaderNavi />
            <div className="App">
                <nav>
                    <h1>PUZZLE</h1>
                </nav>
                <AppContext.Provider value={{board, setBoard}}>
                    <Board />
                    <Keyboard />
                </AppContext.Provider>
            </div>
        </>
    )
}

export default MiniGame;