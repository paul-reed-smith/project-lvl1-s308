import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { getUserName } from './utils';

const steps = 3;

const gameEngine = (gameTask, getGameLogic) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);

  const userName = getUserName();
  console.log(`Hello! ${userName} \n`);

  for (let i = 0; i < steps; i += 1) {
    const gameLogic = getGameLogic();

    const question = car(gameLogic);
    console.log(`Question : ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(gameLogic);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is not a correct answer! Correct was "${correctAnswer}" \n Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};
export default gameEngine;
