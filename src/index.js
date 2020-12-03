import readlineSync from 'readline-sync';

const createGame = (getGameData, gameRule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameRule}`);
  const maxRoundAmount = 3;
  for (let i = 0; i < maxRoundAmount; i += 1) {
    const [expression, expectedAnswer] = getGameData();
    const userAnswer = readlineSync.question(`Question: ${expression}
Your answer: `);
    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'
Let 's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default createGame;
