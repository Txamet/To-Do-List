#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");
class TaskCLI {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }
    ;
}
;
const toDoListCLI = [];
let login = true;
function addTaskCLI(task) {
    if (task.length == 0) {
        console.log(chalk.red("Error: No task added, please try again."));
    }
    else {
        toDoListCLI.push(new TaskCLI(task));
        console.log(chalk.italic.green(`The task "${task}" has been added to the To Do List`));
        ;
    }
    ;
}
;
function displayAllTasksCLI() {
    if (toDoListCLI.length > 0) {
        console.log(chalk.magenta("------TO DO LIST------"));
        toDoListCLI.forEach((task, index) => {
            let taskStatus = (task.completed === false) ? "" : "[completed]";
            console.log((`${chalk.yellow(index + 1)}: ${chalk.white(task.task)}  ${chalk.green(taskStatus)}`));
        });
    }
    else {
        console.log(chalk.red("To Do List is empty"));
    }
    ;
}
;
function completeTaskCLI(index) {
    if (index >= toDoListCLI.length || isNaN(index) || index < 0 || index === undefined) {
        console.log(chalk.red("Error: invalid choice, please try again"));
    }
    else if (toDoListCLI[index].completed === false) {
        toDoListCLI[index].completed = true;
        console.log(chalk.italic.green(`Task "${toDoListCLI[index].task}" completed. Well done!`));
    }
    else {
        console.log(chalk.italic.red(`Task "${toDoListCLI[index].task}" was already completed.`));
    }
    ;
}
;
function deleteTaskCLI(index) {
    if (index >= toDoListCLI.length || isNaN(index) || index < 0 || index === undefined) {
        console.log(chalk.red("Error: invalid choice, please try again"));
    }
    else {
        let deletedTask = toDoListCLI[index].task;
        console.log(chalk.italic.green(`The task "${deletedTask}" has been deleted from the To Do List`));
        toDoListCLI.splice(index, 1);
    }
    ;
}
console.log(chalk.cyan(figlet.textSync("       To Do List\nTask Manager")));
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    while (login) {
        let option = yield inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.italic.cyan("Select an option:"),
                choices: [
                    "Add a task",
                    "Delete a task",
                    "Check a task as completed",
                    "View Todo-List",
                    chalk.italic.red("Exit program")
                ]
            },
        ]);
        switch (option.select) {
            case "Add a task":
                yield add();
                break;
            case "Delete a task":
                yield erase();
                break;
            case "Check a task as completed":
                yield complete();
                break;
            case "View Todo-List":
                yield list();
                break;
            case chalk.italic.red("Exit program"): login = false;
        }
    }
});
let add = () => __awaiter(void 0, void 0, void 0, function* () {
    let newTask = yield inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.italic.white("Enter a new task: "),
        },
    ]);
    addTaskCLI(newTask.task);
});
let list = () => __awaiter(void 0, void 0, void 0, function* () {
    displayAllTasksCLI();
});
let erase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield list();
    let taskIndex = yield inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.italic.red("Enter the index of the task to delete from the To Do List: ")
        }
    ]);
    deleteTaskCLI(taskIndex.index - 1);
});
let complete = () => __awaiter(void 0, void 0, void 0, function* () {
    yield list();
    let completeTaskIndex = yield inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.italic.white("Enter the index of the task to check as completed: ")
        },
    ]);
    completeTaskCLI(completeTaskIndex.index - 1);
});
main();
//# sourceMappingURL=todolistCLI.js.map