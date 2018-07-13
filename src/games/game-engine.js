import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  return userName;
};

const steps = 3;

export default (gameTask, getGameLogic) => {
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

    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is not a correct answer! Correct was "${correctAnswer}" \n Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};
