import { gameLogicForIs } from '../utils';
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

const getGameLogic = () => gameLogicForIs(isPrime, beginOfRange, endOfRange);

export default () => gameEngine(gameTask, getGameLogic);
