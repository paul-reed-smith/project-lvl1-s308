import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameLogicForIs = (isFunc, beginOfRange, endOfRange) => {
  const num = getRandomNum(beginOfRange, endOfRange);
  const correctAnswer = isFunc(num) ? 'yes' : 'no';

  return { question: num, answer: correctAnswer };
};

const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  return userName;
};

export { getRandomNum, gameLogicForIs, getUserName };
