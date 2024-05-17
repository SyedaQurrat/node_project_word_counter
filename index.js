import inquirer from "inquirer";
import chalk from "chalk";
// display a colour full welcome message
console.log("<<", "=".repeat(15), "*".repeat(20), "=".repeat(15), ">>");
console.log(chalk.bold.italic.green("\t \t WELCOME TO WORD COUNTER"));
console.log("<<", "=".repeat(15), "*".repeat(20), "=".repeat(15), ">>");
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence"
    }
]);
//triming a sentence spliting in to word base on "space"
let words = answers.sentence.trim().split(" ");
// analysis of user input sentence
console.log("<<", "=".repeat(15), "*".repeat(20), "=".repeat(15), ">>");
console.log(chalk.bold.italic.green("\t \t \t SENTENCES"));
console.log("<<", "=".repeat(15), "*".repeat(20), "=".repeat(15), ">>");
console.log(words);
console.log("<<", "=".repeat(15), "*".repeat(20), "=".repeat(15), ">>");
console.log(chalk.bold.italic.green(`\t \t \twords count ${chalk.bold(words.length)}`));
console.log("<<", "=".repeat(15), "*".repeat(20), "=".repeat(15), ">>");
