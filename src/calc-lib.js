import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import greeting from '.';

const twoDigitsRandom = () => Math.round(Math.random() * 100);

const questionCreate = () => {
  const num = twoDigitsRandom();

  if (num > 60) {
    return cons('+', (a, b) => a + b);

  } else { if (num < 60 && num > 30) {
      return cons('-', (a, b) => a - b);

    } else {
        return cons('*', (a, b) => a * b);
    } 
};

const brainCalc = () => {
  const userName = greeting('What is the result of the expression?');

  for (let i = 0; i < 4; i += 1) {
    const firstNum = twoDigitsRandomization();
    const secondNum = twoDigitsRandomization();

    const question = questionCreate();
    const operator = car(question);

    console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = cdr(question)(num1, num2);


    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(` "${userAnswer}" is not a correct answer! Correct was "${correctAnswer}" \n Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}`);
};

export default brainCalc;
