/* Letter.jsx */ 

// Hooks
import React, {useContext, useEffect} from 'react'

// 전역변수 가져옴
import { AppContext } from '../Routes/MiniGame';

const Letter = ({ letterPos, attemptVal }) => {
  // 사용할 전역변수 
  const { board, setDisabledLetters, currAttempt, correctWord } = useContext(AppContext);

  // 단어를 보드 어디에 추가할지를 위해 만든 변수
  const letter = board[attemptVal][letterPos];
  // 단어가 정답임을 체크해줄 변수, true - false
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  // 단어가 정답에 포함이긴한데, 자리가 안맞는걸 체크해줄 변수
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  // 현재 단어의 State를 관리해줄 변수 - 정답, 근접, 틀림
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

  // currAttempt.attempt 가 불릴때마다 실행
  useEffect(() => {
    // 단어가 틀림일때를 체크
    if (letter !== "" && !correct && !almost) {
      //console.log(letter);
      // 알파벳을 제외해주는 setter에 추가
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}



export default Letter;
