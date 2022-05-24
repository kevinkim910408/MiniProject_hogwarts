/* Keyboard.jsx */ 

// Hooks
import React, {useCallback, useEffect, useContext} from 'react'
//전역변수
import { AppContext } from '../Routes/MiniGame';
// Components
import Key from './Key';

const Keyboard = () => {
  // 전역변수
  const {onEnter, onDelete, onSelectLetter, disabledLetters} = useContext(AppContext);

  // 키보드에 생성할 친구들
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // useCallback으로 함수를 저장 - 재 렌더링될때마다 함수실행방지 (함수를 재사용한다는 뜻) - 전체적으로는 키보드 이벤트
  const handleKeyboard = useCallback((event)=>{
    if (event.key === "Enter"){
      onEnter();
    }else if(event.key === "Backspace"){
      onDelete();
    }else{
      keys1.forEach((key)=>{
        if(event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      })
      keys2.forEach((key)=>{
        if(event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      })
      keys3.forEach((key)=>{
        if(event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      })
    }
  });

  // handleKeyboard 가 불리면 keydown 이벤트 시작, 쌓인 이벤트는 삭제하게위해 return에서 삭제
  useEffect(()=>{
    document.addEventListener("keydown", handleKeyboard)

    return () => {
    document.removeEventListener("keydown", handleKeyboard)
    };
  }, [handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className="line1">
        {/* map으로 위에서 정해준 key들 돌면서, props로 Key에 넘겨줌, disabledLetters은 key라는걸 가지고있으면 활성화준비 */}
        {keys1.map((key)=>{
        return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="line2">
        {keys2.map((key)=>{
        return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey/>
        {keys3.map((key)=>{
        return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>;
        })}
        <Key keyVal={"DELETE"} bigKey/>
      </div>
    </div>
  )
}


export default Keyboard;