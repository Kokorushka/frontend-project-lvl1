import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

const getAndPrintName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default getAndPrintName;
