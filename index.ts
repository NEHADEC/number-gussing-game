#! /usr/bin.env node

import inquirer  from "inquirer";

console.log("\n\twelcome to Code With Neha - CLI Number Gussing Game\t");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name : "userGuessNumber",
        type: "number",
        message : "Enter Your Guess Number(Number Limit From 1to 5):",
    },
]);

if (answer.userGuessNumber === randomNumber){
    console.log("congratulation ! you guess a correct number.");

    
}
else{
    console.log("sorry, you guess a wrong number");
    
}
