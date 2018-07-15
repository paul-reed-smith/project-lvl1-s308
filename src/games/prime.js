import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import gameEngine from '../game-engine';

const gameTask = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const beginOfRange = 1;
const endOfRange = 100;

const getGameLogic = () => {
  const num = getRandomNum(beginOfRange, endOfRange);
  const question = num;

  const answer = isPrime(num) ? 'yes' : 'no';

  return cons(question, String(answer));
};

export default () => gameEngine(gameTask, getGameLogic);
