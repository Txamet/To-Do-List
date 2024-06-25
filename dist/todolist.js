"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoList = exports.Task = void 0;
exports.addTask = addTask;
exports.showToDoList = showToDoList;
exports.completeTask = completeTask;
exports.deleteTask = deleteTask;
class Task {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }
    ;
}
exports.Task = Task;
;
exports.toDoList = [];
function addTask(task) {
    exports.toDoList.push(new Task(task));
}
;
function showToDoList() {
    exports.toDoList.forEach((task, index) => {
        let taskStatus = (task.completed === false) ? "" : "[completed]";
        console.log((`${index + 1}: ${task.task}  ${taskStatus}`));
    });
}
;
function completeTask(index) {
    exports.toDoList[index].completed = true;
}
;
function deleteTask(index) {
    exports.toDoList.splice(index, 1);
}
;
//# sourceMappingURL=todolist.js.map