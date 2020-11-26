#!/usr/bin/env node

import { greeting, getName, greetingWithName } from '../src/cli.js';
import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

greeting();
const userName = getName();
greetingWithName(userName);

const isEven = (number) => number % 2 === 0;

const brainEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round((Math.random() - 0.5) * 200);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}
Your answer: `);
    if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
      console.log('Correct!');
    } else if (isEven(randomNumber) && userAnswer !== 'yes') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'
Let 's try again, ${name}!`);
      return;
    } else if (!isEven(randomNumber) && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'
Let 's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

brainEvenGame(userName);
