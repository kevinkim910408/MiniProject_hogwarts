/* MiniGame.jsx */

// Components
import Board from "../Components/Board"
import Keyboard from "../Components/Keyboard"
import HeaderNavi from '../Components/HeaderNavi'
import { boardDefault, generateWordSet } from '../Components/Words';
import GameOver from "../Components/GameOver";

//Hooks
import { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();

const MiniGame = () =>{
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos: 0})
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
      gameOver: false,
      guessedWord: false,
    });

    useEffect(()=>{
        generateWordSet().then((word)=>{
            //console.log(word.wordSet)
            setWordSet(word.wordSet);
            setCorrectWord(word.todaysWord);
        })
    }, [])
    
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

        if (currAttempt.letterPos !== 5) return;

        let currWord ="";
        for(let i=0; i<5; ++i){
            currWord += board[currAttempt.attempt][i];
        }

        if(wordSet.has(currWord)){
            setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos : 0})
            console.log(currWord);
        }else{
            alert("Word Not Found")
        }

        if (currWord === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true });
            return;
          }
          console.log(currAttempt);
          if (currAttempt.attempt === 5) {
            setGameOver({ gameOver: true, guessedWord: false });
            return;
          }
        
    }
    return (
        <div className="App">
          <nav>
          <HeaderNavi />
          </nav>
          <AppContext.Provider
            value={{
              board,
              setBoard,
              currAttempt,
              setCurrAttempt,
              correctWord,
              onSelectLetter,
              onDelete,
              onEnter,
              setDisabledLetters,
              disabledLetters,
              gameOver,
            }}
          >
            <div className="game">
              <Board />
              {gameOver.gameOver ? <GameOver /> : <Keyboard />}
            </div>
          </AppContext.Provider>
        </div>
      );
    }

export default MiniGame;