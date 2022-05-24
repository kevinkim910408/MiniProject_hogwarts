/* Board.jsx */ 

// Components

import Letter from './Letter';

// Hooks
import React from 'react'

function Board() {
  const numList = [0,1,2,3,4];
  const Board1 = numList.map((value, index)=>(<Letter letterPos={value} attemptVal={0} />))
  const Board2 = numList.map((value, index)=>(<Letter letterPos={value} attemptVal={1} />))
  const Board3 = numList.map((value, index)=>(<Letter letterPos={value} attemptVal={2} />))
  const Board4 = numList.map((value, index)=>(<Letter letterPos={value} attemptVal={3} />))
  const Board5 = numList.map((value, index)=>(<Letter letterPos={value} attemptVal={4} />))
  const Board6 = numList.map((value, index)=>(<Letter letterPos={value} attemptVal={5} />))
  return (
    <div className="board">
      {/* 보드생성 */}
      <div className="row">
        {Board1}
      </div>
      <div className="row">
        {Board2}
      </div>
      <div className="row">
        {Board3}
      </div>
      <div className="row">
       {Board4}
      </div>
      <div className="row">
       {Board5}
      </div>
      <div className="row">
       {Board6}
      </div>
    </div>
  );
}


export default Board;