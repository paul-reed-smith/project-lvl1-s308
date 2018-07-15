import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import gameEngine from '../game-engine';

const gameTask = 'Balance the given number.';

const findSumOfDigits = (num) => {
  const numStr = String(num);

  let res = 0;
  const lenOfStr = numStr.length;

  for (let i = 0; i < lenOfStr; i += 1) {
    res += Number(numStr[i]);
  }
  return res;
};

const getNumberBalanced = (num) => {
  const numLength = String(num).length;
  const sumOfDigits = findSumOfDigits(num);

  const average = Math.floor(sumOfDigits / numLength);
  const remainder = sumOfDigits % numLength;

  let res = '';
  for (let i = numLength; i > 0; i -= 1) {
    if (remainder < i) {
      res += `${average}`;
    } else {
      res += `${average + 1}`;
    }
  }
  return res;
};

const beginOfRange = 10;
const endOfRange = 1000;

const getGameLogic = () => {
  const question = getRandomNum(beginOfRange, endOfRange);
  const correctAnswer = getNumberBalanced(question);

  return cons(question, String(correctAnswer));
};

export default () => gameEngine(gameTask, getGameLogic);
