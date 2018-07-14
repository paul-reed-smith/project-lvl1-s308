import cons from 'hexlet-pairs';
import getRandomNum from '../random';
import gameEngine from './game-engine';

// This file is main logic of game witch answers is number is even

const gameTask = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => num % 2 === 0;

const minValue = 1;
const maxValue = 100;

const getGameLogic = () => {
  const num = getRandomNum(minValue, maxValue);
  const question = num;

  const answer = isEven(num) ? 'yes' : 'no';

  return cons(question, answer);
};
export default () => gameEngine(gameTask, getGameLogic);
