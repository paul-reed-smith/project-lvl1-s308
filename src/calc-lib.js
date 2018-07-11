import readlineSync from 'readline-sync';

const twoDigitsRandomization = () => Math.round(Math.random() * 100);

const brainCalc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${userName} :)`);

  console.log('What is the result of the expression?');

  let firstNum = twoDigitsRandomization();
  let secondNum = twoDigitsRandomization();

  const sumOfNums = firstNum + secondNum;
  console.log(`\nQuestion: ${firstNum} + ${secondNum}`);
  let userAnswer = readlineSync.question('Enter your answer: ');

  if (Number(userAnswer) === sumOfNums) {
    console.log('\nCorrect!');
  } else {
    return console.log(` "${userAnswer}" is not a correct answer! Correct was "${sumOfNums}" \n Let's try again, ${userName}!`);
  }

  firstNum = twoDigitsRandomization();
  secondNum = twoDigitsRandomization();

  const differenceOfNum = firstNum - secondNum;
  console.log(`\nQuestion: ${firstNum} - ${secondNum}`);
  userAnswer = readlineSync.question('Enter your answer: ');

  if (Number(userAnswer) === differenceOfNum) {
    console.log('\nCorrect!');
  } else {
    return console.log(` "${userAnswer}" is not a correct answer! Correct was "${sumOfNums}" \n Let's try again, ${userName}!`);
  }

  firstNum = twoDigitsRandomization();
  secondNum = twoDigitsRandomization();

  const multiplyNums = firstNum * secondNum;
  console.log(`\nQuestion: ${firstNum} * ${secondNum}`);
  userAnswer = readlineSync.question('Enter your answer: ');

  if (Number(userAnswer) === multiplyNums) {
    console.log('\nCorrect!');
  } else {
    return console.log(`\n"${userAnswer}" is not a correct answer! Correct was "${sumOfNums}" \n Let's try again, ${userName}!`);
  }
  return console.log(`\nCongratulations, ${userName}`);
};

export default brainCalc;
