#!/usr/bin/env node
console.log("By iqra tariq");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
console.log(answer);
//CONDITIONAL STATEMENT
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
console.log("THE END");
