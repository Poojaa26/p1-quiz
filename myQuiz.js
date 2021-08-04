var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blueBright.bold("HOW WELL DO YOU KNOW POOJAA?"));
var user= readlineSync.question(chalk.magenta.bold("ENTER YOUR NAME: "));
console.log(chalk.red("WELCOME" , user , "!"));

score=0;
var highScores= [
{ name: "Arun",
  score: 3},
{ name: "Shree",
  score: 2}
]

function quiz( question, answer)
{
  userAns= readlineSync.question(chalk.yellow(question));
  if(userAns===answer)
   { console.log(chalk.green("CORRECT!"));
     score++; }
  else
   { console.log(chalk.red("WRONG!")); }
}

var qNA = [
  { question: "WHERE DO I LIVE? ",
    answer: "chennai"},
  { question: "WHO IS MY FAVOURITE CRICKETER? ",
    answer: "msd"},
  { question: "WHAT IS MY FAVOURITE COLOUR? ",
    answer: "violet"}
]

for( var i=0; i<qNA.length; i++)
 quiz( qNA[i].question , qNA[i].answer);

console.log(chalk.magenta("YOUR SCORE: " , score));
console.log(chalk.cyanBright("HIGH SCORES"));
for( var j=0; j< highScores.length ; j++)
 console.log(chalk.blueBright(highScores[j].name ," - ",highScores[j].score ));
