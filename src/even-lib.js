import readlineSync from 'readline-sync';
import greeting from '.';

// This file is main logic of game witch answers is number is even


const evenGame = () => {
  const userName = greeting('Answer "yes" if number even otherwise answer "no".');

  for (let i = 1; i < 4; i += 1) {
    const question = Math.round(Math.random() * 100);
    console.log(`Number is: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(` "${userAnswer}" is not a correct answer! Correct was "${correctAnswer}" \n Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default evenGame;
