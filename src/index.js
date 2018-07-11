import readlineSync from 'readline-sync';

const greeting = (gameRule) => {
  console.log('Welcome to the Brain Games!');

  if (gameRule !== '') { console.log(gameRule); }

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello! ${userName} :)\n`);
  return userName;
};

export default greeting;
