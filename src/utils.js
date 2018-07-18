import { cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameLogicForIs = (isFunc, beginOfRange, endOfRange) => {
  const num = getRandomNum(beginOfRange, endOfRange);
  const question = num;

  const answer = isFunc(num) ? 'yes' : 'no';

  return cons(question, String(answer));
};

const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  return userName;
};

export { getRandomNum, gameLogicForIs, getUserName };
