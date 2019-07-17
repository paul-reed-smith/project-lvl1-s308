import getRandomNum from '../utils';
import gameEngine from '../game-engine';

// This file is main logic of game which ask user to find gcd of two numbers

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

const beginOfRange = 1;
const endOfRange = 100;

const getGameLogic = () => {
  const firstNum = getRandomNum(beginOfRange, endOfRange);
  const secondNum = getRandomNum(beginOfRange, endOfRange);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = findGCD(firstNum, secondNum);

  return { question: [question], answer: String(correctAnswer) };
};

export default () => gameEngine(gameTask, getGameLogic);
