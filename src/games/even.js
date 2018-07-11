import readlineSync from 'readline-sync';

// This file is main logic of game witch answers is number is even

const steps = 3;

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello! ${userName} \n`);

  for (let i = 1; i <= steps; i += 1) {
    const question = Math.round(Math.random() * 100);
    console.log(`Question : ${question}`);

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
