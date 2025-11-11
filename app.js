import chalk from "chalk";
import inquirer from "inquirer";
import { add, subtract, multiply, divide } from "./math.js";

console.log(chalk.greenBright("🧮 Welcome to the Colorful Calculator!"));

async function runCalculator() {
  const { op } = await inquirer.prompt([
    {
      type: "list",
      name: "op",
      message: "Choose an operation:",
      choices: [
        { name: "Add (a + b)", value: "add" },
        { name: "Subtract (a - b)", value: "subtract" },
        { name: "Multiply (a * b)", value: "multiply" },
        { name: "Divide (a / b)", value: "divide" },
      ],
    },
  ]);

  const { a, b } = await inquirer.prompt([
    { type: "input", name: "a", message: "Enter first number:" },
    { type: "input", name: "b", message: "Enter second number:" },
  ]);

  const x = parseFloat(a);
  const y = parseFloat(b);

  let result;
  switch (op) {
    case "add":
      result = add(x, y);
      break;
    case "subtract":
      result = subtract(x, y);
      break;
    case "multiply":
      result = multiply(x, y);
      break;
    case "divide":
      result = divide(x, y);
      break;
  }

  console.log(chalk.yellow(`Result: ${result}`));
}

runCalculator();
