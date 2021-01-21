const chalk = require('chalk');
const heading = chalk.bold.red;

console.log(heading("Welcome to the HARRY POTTER QUIZ!!"));

var readlineSync = require("readline-sync");

var score=0;

var userName = readlineSync.question("What is your name ?");

console.log("Hello ",userName);



var highscores =
[
  {
    name:'gaurav',
    score:3
  }
]

var questions =
[
  {
    question: "What is harry's fathers name:",
    answer: "james",
  },
  {
    question: "whos is harry's male best friend ? :",
    answer: "Ron",
  },

  {
    question: "Who was the Headmaster of Hogwarts? :",
    answer: "Dumbledore",
  }
]
function play(question, answer)
{
  
  var userAnswer = readlineSync.question(question);
  if((userAnswer.toString()).toUpperCase() == (answer.toString()).toUpperCase())
  {
    console.log("you are right");
    score=score+1;
    

  }
  else
  {
    console.log("you are wrong");
  }
console.log("Your score is " ,score);
console.log("--------------");
}

for (var i = 0;i<questions.length;i++)
{
play(questions[i].question,questions[i].answer);
}


for( var i =0; i<highscores.length;i++)
{
  if (score>=highscores[i].score)
  {
    console.log("Congrats you have the highest score!!")
  }
}
