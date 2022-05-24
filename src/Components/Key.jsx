/* Key.jsx */ 

// Hooks
import React, { useContext } from "react";

// 전역변수
import { AppContext } from "../Routes/MiniGame";

const Key = ({ keyVal, bigKey, disabled }) => {
  // 전역변수
  const { gameOver, onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  // 키가 눌린건지 enter인지 delete인지 판별
  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key