import readlineSync from 'readline-sync';

// This file is main logic of game witch answers is number is even

const isEvenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${userName} :)`);

  console.log('Answer "yes" if number even otherwise answer "no"');

  for (let i = 1; i <= 3; i += 1) {
    const numberForAsk = Math.round(Math.random() * 100);

    console.log(`\nNumber is: ${numberForAsk}`);

    const userAnswer = readlineSync.question('Enter your answer: ');

    const isAnswerCorrect = (answer) => {
      if ((answer.toLowerCase() === 'yes' && numberForAsk % 2 === 0) || (answer.toLowerCase() === 'no' && numberForAsk % 2 !== 0)) {
        return true;
      }
      return false;
    };

    if (isAnswerCorrect(userAnswer)) {
      console.log('\nCorrect!');
    } else {
      return console.log(` "${userAnswer}" is not a correct answer! Correct was "${numberForAsk % 2 === 0 ? 'yes' : 'no'}" \n Let's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}`);
};

export default isEvenGame;
