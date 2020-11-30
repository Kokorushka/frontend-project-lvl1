import readlineSync from 'readline-sync';
import getAndPrintName from './cli.js';

const createGame = (func, rules) => {
  const userName = getAndPrintName();
  console.log(`${rules}`);
  const maxRoundAmount = 3;
  for (let i = 0; i < maxRoundAmount; i += 1) {
    const [expression, expectedAnswer] = func();
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
