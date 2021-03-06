/* MiniGame.jsx */

// Components
import Board from "../Components/Board"
import Keyboard from "../Components/Keyboard"
import HeaderNavi from '../Components/HeaderNavi'
import { boardDefault, generateWordSet } from '../Components/Words';
import GameOver from "../Components/GameOver";
import {FlexRowDiv} from '../Components/GlobalStyled/CommonStyled'

// css
import styled from 'styled-components'

//Hooks
import { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();

const MiniGame = () =>{
    // 기초 보드세팅 boardDefault를 가져온다 5X6
    const [board, setBoard] = useState(boardDefault);
    // 가로줄을 셀 state
    const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos: 0})
    // word bank에서 단어 목록을 저장해줄 state
    const [wordSet, setWordSet] = useState(new Set());
    // 정답 단어를 저장할 state
    const [correctWord, setCorrectWord] = useState("");
    // 키보드에서 정답단어에 없는 단어를 지워줄 state
    const [disabledLetters, setDisabledLetters] = useState([]);
    // 성공/실패 여부를 판단해줄 state
    const [gameOver, setGameOver] = useState({
      gameOver: false,
      guessedWord: false,
    });

    // 한번만 렌더링해줄 useEffect()
    useEffect(()=>{
        // 다른페이지 갔다오면 단어판 비워주기
        // 단어판 생성
        generateWordSet().then((word)=>{
            //console.log(word.wordSet)
            // 단어목록가져와서, 정답단어 설정
            setWordSet(word.wordSet);
            setCorrectWord(word.todaysWord);
        })
    },[])
    
    // 단어 하나하나를 넣는다
    const onSelectLetter = (keyVal) => {
        if(currAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard)
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
    }

    // 단어를 지워준다
    const onDelete = () => {
        if(currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard)
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
     }

     // 엔터키 이벤트
    const onEnter = () => { 
        // 도전횟수가 5가 아니면 계속 진행
        if (currAttempt.letterPos !== 5) return;

        // 현재 입력받은 단어 변수만들고, 보드에있는거 긁어와서 넣어줌
        let currWord ="";
        for(let i=0; i<5; ++i){
            currWord += board[currAttempt.attempt][i];
            //console.log(currWord);
        }

        // 현재 입력받은단어가 단어목록에 있는지 없는지 체크
        if(wordSet.has(currWord)){
            // 있으면 시도회수 + 1
            setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos : 0})
            //console.log(currWord);
        }else{
            alert("Word Not Found")
        }

        // 만약 단어가 맞는거면 게임오버, 정답
        if (currWord === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true });
            return;
          }
        console.log(currAttempt);
        // 만약 기회가 다 차면 아웃
        if (currAttempt.attempt === 5) {
        setGameOver({ gameOver: true, guessedWord: false });
        return;
        }
        
    }
    return (
        <div className="App">

          {/* 전역변수관리로 보내줄거 */}
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
            <nav>
             {/* 헤더 */}
             <HeaderNavi />
          </nav>
            <Wrap>
              <div className="game">
                {<Board />}
                {/* 게임오버되면 게임오버창 보여줌, 외엔 키보드 띄워줌 */}
                {gameOver.gameOver ? <GameOver /> : <Keyboard />}
              </div>
              <TextWrap>
                <p>MINI GAME RULES</p>
                <p>1. guess the word in six goes or less</p>
                <p>2. A correct letter turns <GreenText>green</GreenText></p>
                <p>3. A correct letter in the wrong place turns <YellowText>yellow</YellowText></p>
                <p>4. Letters can be used more than once</p>
                <p>5. Answers are never plurals</p>
              </TextWrap>
            </Wrap>
          </AppContext.Provider>
        </div>
      );
    }

export default MiniGame;

const Wrap = styled(FlexRowDiv)`
`;

const TextWrap = styled.div`
  margin-right: 200px;
  font-size: 35px;
  color: white;
  text-shadow: 6px 6px 10px #3CCEBE;
`;

const GreenText = styled.span`
    color: #528d4e;
    filter: brightness(200%);
    font-size: 50px;
`;

const YellowText = styled.span`
    color: #b49f39;
    filter: brightness(200%);
    font-size: 50px;
`;