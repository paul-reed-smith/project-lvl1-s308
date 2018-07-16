import gameEngine from '../game-engine';
import { gameLogicForIs } from '../utils';

// This file is main logic of game witch answers is number is even

const gameTask = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => num % 2 === 0;

const minValue = 1;
const maxValue = 100;

const getGameLogic = () => gameLogicForIs(isEven, minValue, maxValue);

export default () => gameEngine(gameTask, getGameLogic);
