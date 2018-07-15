import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import gameEngine from '../game-engine';

// This file is main logic of game which ask user to find gcd of two numbers
// Сбалансированное число – это число, в котором наименьшая цифра отличается от наибольшей не более чем на единицу
// Порядок цифр в сбалансированном числе – по возрастанию

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

  return cons(question, correctAnswer);
};

export default () => gameEngine(gameTask, getGameLogic);
