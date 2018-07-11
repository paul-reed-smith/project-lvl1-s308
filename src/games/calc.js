import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const twoDigitsRandom = () => Math.round(Math.random() * 100);

const questionCreate = () => {
  const num = twoDigitsRandom();

  if (num > 60) {
    return cons('+', (a, b) => a + b);
  }
  if (num < 60 && num > 30) {
    return cons('-', (a, b) => a - b);
  }
  return cons('*', (a, b) => a * b);
};

const steps = 3;

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello! ${userName} \n`);

  for (let i = 0; i <= steps; i += 1) {
    const firstNum = twoDigitsRandom();
    const secondNum = twoDigitsRandom();

    const question = questionCreate();
    const operator = car(question);

    console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = cdr(question)(firstNum, secondNum);


    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(` "${userAnswer}" is not a correct answer! Correct was "${correctAnswer}" \n Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}`);
};

export default brainCalc;
