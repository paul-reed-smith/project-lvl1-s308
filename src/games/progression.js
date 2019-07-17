import { getRandomNum } from '../utils';
import gameEngine from '../game-engine';

const gameTask = 'What number is missing in this progression?';

const beginOfRange = 1;
const endOfRange = 100;

const minFirstProgressionItem = 1;
const maxFirstProgressionItem = 100;

const minHiddenItemNumber = 2;
const maxHiddenItemNumber = 10;

const getGameLogic = () => {
  const numberOfProgressionItems = 10;
  const firstProgressionItem = getRandomNum(minFirstProgressionItem, maxFirstProgressionItem);
  const stepOfProgression = getRandomNum(beginOfRange, endOfRange);

  const hiddenItemNumber = getRandomNum(minHiddenItemNumber, maxHiddenItemNumber);

  let res = '';
  for (let i = 1; i <= numberOfProgressionItems; i += 1) {
    const progressionItem = firstProgressionItem + (stepOfProgression * (i - 1));
    if (i !== hiddenItemNumber) {
      res += `${progressionItem} `;
    } else {
      res += '.. ';
    }
  }
  const correctAnswer = firstProgressionItem + (stepOfProgression * (hiddenItemNumber - 1));

  return { answer: String(correctAnswer), question: res };
};
export default () => gameEngine(gameTask, getGameLogic);
