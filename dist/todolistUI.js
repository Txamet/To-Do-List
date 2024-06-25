"use strict";
class Task {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }
    ;
}
;
const toDoList = [];
function addTask(task) {
    toDoList.push(new Task(task));
}
;
function completeTask(index) {
    toDoList[index].completed = true;
}
;
function deleteTask(index) {
    toDoList.splice(index, 1);
}
;
function cleanInput(id) {
    document.getElementById(id).value = "";
}
function cleanScreen(id) {
    document.getElementById(id).innerHTML = "";
}
function cancel() {
    cleanScreen("result");
    cleanScreen("display_list");
    cleanInput("new_task");
    cleanInput("check_task");
    cleanInput("erase_task");
    document.getElementById("add_task").hidden = true;
    document.getElementById("complete_task").hidden = true;
    document.getElementById("delete_task").hidden = true;
    document.getElementById("interface").hidden = false;
}
function showAddTaskUI() {
    cleanScreen("display_list");
    cleanScreen("result");
    document.getElementById("add_task").hidden = false;
    document.getElementById("interface").hidden = true;
}
function addTaskUI() {
    let newTask = document.getElementById("new_task").value;
    if (newTask === "" || newTask === undefined) {
        document.getElementById("result").innerHTML = `<span style="color:red;">Error: invalid value. Please try again</span>`;
    }
    else {
        addTask(newTask);
        cleanInput("new_task");
        document.getElementById("result").innerHTML = `Task "<b>${newTask}</b>" has been added to the To Do List`;
        document.getElementById("add_task").hidden = true;
        document.getElementById("interface").hidden = false;
    }
}
function showToDoList() {
    let result = "";
    toDoList.forEach((task, index) => {
        let status = (task.completed == false) ? '<span style="color:red;">pending</span>' : '<span style="color:green;">completed</span>';
        result += `<b>${index + 1}</b>: "${task.task}", status: ${status}<br>`;
    });
    return result;
}
;
function showToDoListUI() {
    if (toDoList.length > 0) {
        cleanScreen("result");
        let list = showToDoList();
        document.getElementById("display_list").innerHTML = list;
    }
    else {
        document.getElementById("result").innerHTML = `To Do List is empty. Please select <b>Add a Task</b> to start a new list.`;
    }
}
function showCompleteTaskUI() {
    if (toDoList.length > 0) {
        cleanScreen("result");
        showToDoListUI();
        document.getElementById("complete_task").hidden = false;
        document.getElementById("interface").hidden = true;
    }
    else {
        document.getElementById("result").innerHTML = `To Do List is empty. Please select <b>Add a Task</b> to start a new list.`;
    }
}
function completeTaskUI() {
    let option = document.getElementById("check_task").value;
    if (isNaN(option) || option <= 0 || option > toDoList.length || option % parseInt(option) != 0) {
        cleanInput("check_task");
        document.getElementById("result").innerHTML = `<span style="color:red;">Error: invalid value. Please try again</span>`;
    }
    else {
        let task = toDoList[option - 1].task;
        completeTask(option - 1);
        cleanInput("check_task");
        showToDoListUI();
        document.getElementById("result").innerHTML = `Task "<b>${task}</b>" is completed. Well done!`;
        document.getElementById("complete_task").hidden = true;
        document.getElementById("interface").hidden = false;
    }
}
function showDeleteTaskUI() {
    if (toDoList.length > 0) {
        cleanScreen("result");
        showToDoListUI();
        document.getElementById("delete_task").hidden = false;
        document.getElementById("interface").hidden = true;
    }
    else {
        document.getElementById("result").innerHTML = `To Do List is empty. Please select <b>Add a Task</b> to start a new list.`;
    }
}
function deleteTaskUI() {
    let option = document.getElementById("erase_task").value;
    if (isNaN(option) || option <= 0 || option > toDoList.length || option % parseInt(option) != 0) {
        cleanInput("erase_task");
        document.getElementById("result").innerHTML = `<span style="color:red;">Error: invalid value. Please try again</span>`;
    }
    else {
        let task = toDoList[option - 1].task;
        deleteTask(option - 1);
        cleanInput("erase_task");
        showToDoListUI();
        document.getElementById("result").innerHTML = `Task "<b>${task}</b>" has been deleted from the To Do List`;
        document.getElementById("delete_task").hidden = true;
        document.getElementById("interface").hidden = false;
    }
}
//# sourceMappingURL=todolistUI.js.map