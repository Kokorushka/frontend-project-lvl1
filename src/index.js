import readlineSync from 'readline-sync';
import getAndPrintName from './cli.js';

const createGame = (func, rules) => {
  const userName = getAndPrintName();
  console.log(`${rules}`);
  for (let i = 0; i < 3; i += 1) {
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
