/* GameOver.jsx */ 

// Hooks
import React, { useContext } from "react";

// 전역변수
import { AppContext } from "../Routes/MiniGame";

const GameOver = () => {
  // 전역변수 사용할거
    const {currAttempt, gameOver, correctWord} = useContext(AppContext);

      return (
        <div className="gameOver">
          <h3>
            {gameOver.guessedWord
              ? "You Win"
              : "You Lose"}
          </h3>
          <h1>Correct Word: {correctWord}</h1>
          {gameOver.guessedWord && (
            <h3>Your Guess: {currAttempt.attempt} attempts</h3>
          )}
        </div>
      );
}


export default GameOver;