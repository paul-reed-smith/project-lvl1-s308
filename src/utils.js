import { cons } from 'hexlet-pairs';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameLogicForIs = (isFunc, beginOfRange, endOfRange) => {
  const num = getRandomNum(beginOfRange, endOfRange);
  const question = num;

  const answer = isFunc(num) ? 'yes' : 'no';

  return cons(question, String(answer));
};

export { getRandomNum, gameLogicForIs };
