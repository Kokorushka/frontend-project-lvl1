import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import { greeting, getName, greetingWithName } from './cli.js';

const game = (func, rules) => {
  // rules - строка-правила, выводимая после приветствия игрока
  // func - генерация данных
  greeting();
  const userName = getName();
  greetingWithName(userName);
  console.log(`${rules}`);
  for (let i = 0; i < 3; i += 1) {
    const [expression, expectedAnswer] = func();
    const userAnswer = readlineSync.question(`Question: ${expression}
Your answer: `);
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'
Let 's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
