#! /usr/bin/env node

const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");

class TaskCLI {
    task: string;
    completed: boolean;

    constructor(task: string) {
        this.task = task;
        this.completed = false;
    };
};

const toDoListCLI: TaskCLI[] = [];
let login: boolean = true;

function addTaskCLI(task: string) {
    if (task.length == 0) {
      console.log(chalk.red("Error: No task added, please try again."));

    } else {
      toDoList.push(new Task(task));
      console.log(chalk.italic.green(`The task "${task}" has been added to the To Do List`));;
    };  
};

function displayAllTasksCLI() {
  if (toDoList.length > 0) {
    console.log(chalk.magenta("------TO DO LIST------"));
    toDoList.forEach((task, index) => {
      let taskStatus: string = (task.completed === false) ? "" : "[completed]";
      console.log((`${chalk.yellow(index + 1)}: ${chalk.white(task.task)}  ${chalk.green(taskStatus)}`));
    });

  } else {
    console.log(chalk.red("To Do List is empty"));
  };  
};

function completeTaskCLI(index: number) {
    if (index >= toDoList.length || isNaN(index) || index < 0 || index === undefined) {
      console.log(chalk.red("Error: invalid choice, please try again"));

    } else if (toDoList[index].completed === false) {
      toDoList[index].completed = true; 
      console.log(chalk.italic.green(`Task "${toDoList[index].task}" completed. Well done!`)); 

    } else {
      console.log(chalk.italic.red(`Task "${toDoList[index].task}" was already completed.`));
    }; 
};

function deleteTaskCLI(index: number) {
    if (index >= toDoList.length || isNaN(index) || index < 0 || index === undefined) {
      console.log(chalk.red("Error: invalid choice, please try again"));

    } else {
      let deletedTask = toDoList[index].task;
      console.log(chalk.italic.green(`The task "${deletedTask}" has been deleted from the To Do List`));
      toDoList.splice(index, 1);
    }; 
}

console.log(chalk.cyan(figlet.textSync("       To Do List\nTask Manager")))

let main = async () => {
  while (login) {
    let option = await inquirer.prompt([
      {
        name: "select",
        type: "list",
        message: chalk.italic.cyan("Select an option:"),
        choices:[
          "Add a task",
          "Delete a task",
          "Check a task as completed",
          "View Todo-List",
          chalk.italic.red("Exit program")
        ]
      },
    ]);

    switch (option.select) {
        case "Add a task": await add(); break;
        case "Delete a task": await erase(); break;
        case "Check a task as completed": await complete(); break;
        case "View Todo-List": await list(); break;
        case chalk.italic.red("Exit program"): login = false;
    }
  }
};

let add = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: chalk.italic.white("Enter a new task: "),
    },
  ]);

  addTaskCLI(newTask.task);
};

let list = async () => {
  displayAllTasksCLI();
};

let erase = async () => {
    await list();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.italic.red("Enter the index of the task to delete from the To Do List: ")
        }
    ]);

    deleteTaskCLI(taskIndex.index -1);
}

let complete = async () => {
    await list();
    let completeTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.italic.white("Enter the index of the task to check as completed: ")
        },
    ]);

    completeTaskCLI(completeTaskIndex.index - 1);
};

main();