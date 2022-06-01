/* Words.jsx */ 

import wordBank from './word-bank.txt'

// 사용할 보드 5 x 6
export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
]

// 단어목록 생성기
export const generateWordSet = async () => {
  // 단어목록과 정답단어 변수
  let wordSet;
  let todaysWord;
  // text파일에 있는걸 긁어와서
  await fetch(wordBank)
    .then((response) => response.text())
    // result에 넣어줌
    .then((result) => {
      // 단어가 한줄에 하나씩있어서 split으로 잘라서 보관 - 단어가 \r\n가 붙어나오던데, 엔터가 \r\n 라고 한다.
      const wordArr = result.split("\n");
      // 정답단어는 목록에서 랜덤으로 굴려서 생성
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      // 단어목록에 중복단어 제거해서 넣어줌
      wordSet = new Set(wordArr);
      //console.log(todaysWord)
    });
    // 단어목록, 정답단어 내보내기
  return { wordSet, todaysWord };
};