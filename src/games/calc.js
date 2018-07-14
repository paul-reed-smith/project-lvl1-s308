
import { cons } from 'hexlet-pairs';
import getRandomNum from '../random';
import gameEngine from './game-engine';

// This file is main logic of game which ask user to calculate some random expressions

const gameTask = 'What is the result of the expression?';

const minValue = 1;
const maxValue = 4;

const beginOfRange = 1;
const endOfRange = 100;

const getGameLogic = () => {
  const num = getRandomNum(minValue, maxValue);

  const a = getRandomNum(beginOfRange, endOfRange);
  const b = getRandomNum(beginOfRange, endOfRange);

  let res;
  switch (num) {
    case 1:
      res = cons(`${a} + ${b}`, a + b);
      break;
    case 2:
      res = cons(`${a} - ${b}`, a - b);
      break;
    case 3:
      res = cons(`${a} * ${b}`, a * b);
      break;
    default:
  }

  return res;
};
export default () => gameEngine(gameTask, getGameLogic);
