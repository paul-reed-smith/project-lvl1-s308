import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
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
  let progressionItem = firstProgressionItem;
  let correctAnswer = 0;
  for (let i = 0; i <= numberOfProgressionItems; i += 1) {
    progressionItem += stepOfProgression;
    if (i !== hiddenItemNumber) {
      res += `${progressionItem} `;
    } else {
      res += '.. ';
      correctAnswer = progressionItem;
    }
  }
  const question = res;

  return cons(question, correctAnswer);
};
export default () => gameEngine(gameTask, getGameLogic);
