export class Task {
    task: string;
    completed: boolean;

    constructor(task: string) {
        this.task = task;
        this.completed = false;
    };
};

export const toDoList: Task[] = [];

export function addTask(task: string) {
    toDoList.push(new Task(task));
};   

export function showToDoList() {
    toDoList.forEach((task, index) => {
      let taskStatus: string = (task.completed === false) ? "" : "[completed]";
      console.log((`${index + 1}: ${task.task}  ${taskStatus}`));
    });
};

export function completeTask(index: number) {
   toDoList[index].completed = true; 
};

export function deleteTask(index: number) {
    toDoList.splice(index, 1);
};