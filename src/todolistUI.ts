class Task {
  task: string;
  completed: boolean;

  constructor(task: string) {
      this.task = task;
      this.completed = false;
  };
};

const toDoList: Task[] = [];

function addTask(task: string) {
  toDoList.push(new Task(task));
};   

function completeTask(index: number) {
 toDoList[index].completed = true; 
};

function deleteTask(index: number) {
  toDoList.splice(index, 1);
};

function cleanInput(id: string) {
  (document.getElementById(id) as HTMLFormElement).value = "";
}

function cleanScreen(id: string) {
  document.getElementById(id)!.innerHTML = "";
}

function cancel() {
  cleanScreen("result");
  cleanScreen("display_list");
  cleanInput("new_task");
  cleanInput("check_task");
  cleanInput("erase_task");
  document.getElementById("add_task")!.hidden = true;
  document.getElementById("complete_task")!.hidden = true;
  document.getElementById("delete_task")!.hidden = true;
  document.getElementById("interface")!.hidden = false;
}

function showAddTaskUI() {
  cleanScreen("display_list");
  cleanScreen("result");
  document.getElementById("add_task")!.hidden = false;
  document.getElementById("interface")!.hidden = true;
}

function addTaskUI() {
  let newTask: string = (document.getElementById("new_task") as HTMLFormElement).value;

  if (newTask === "" || newTask === undefined ) {
    document.getElementById("result")!.innerHTML =  `<span style="color:red;">Error: invalid value. Please try again</span>`;
    
  } else {
    addTask(newTask);
    cleanInput("new_task");

    document.getElementById("result")!.innerHTML =  `Task "<b>${newTask}</b>" has been added to the To Do List`;
    document.getElementById("add_task")!.hidden = true;
    document.getElementById("interface")!.hidden = false; 
  }  
}

function showToDoList() {
  let result: string = "";
  toDoList.forEach((task, index) => {
    let status = (task.completed == false) ? '<span style="color:red;">pending</span>' : '<span style="color:green;">completed</span>';
    result += `<b>${index +1}</b>: "${task.task}", status: ${status}<br>` 
  });

  return result;
};

function showToDoListUI() {
  if (toDoList.length > 0) {
    cleanScreen("result");
    let list: string = showToDoList();
    document.getElementById("display_list")!.innerHTML = list;

  } else {
    document.getElementById("result")!.innerHTML = `To Do List is empty. Please select <b>Add a Task</b> to start a new list.`
  }  
}

function showCompleteTaskUI() {
  if (toDoList.length > 0) {
    cleanScreen("result");
    showToDoListUI();
    document.getElementById("complete_task")!.hidden = false;
    document.getElementById("interface")!.hidden = true;

  } else {
    document.getElementById("result")!.innerHTML = `To Do List is empty. Please select <b>Add a Task</b> to start a new list.`
  }  
}

function completeTaskUI() {
  let option = (document.getElementById("check_task") as HTMLFormElement).value;

  if(isNaN(option) || option <= 0 || option > toDoList.length || option % parseInt(option) != 0) {
    cleanInput("check_task");
    document.getElementById("result")!.innerHTML = `<span style="color:red;">Error: invalid value. Please try again</span>`;

  } else {
    let task: string = toDoList[option -1].task
    completeTask(option -1);
    cleanInput("check_task");
    showToDoListUI();

    document.getElementById("result")!.innerHTML = `Task "<b>${task}</b>" is completed. Well done!`;
    document.getElementById("complete_task")!.hidden = true;
    document.getElementById("interface")!.hidden = false; 
  }
}
function showDeleteTaskUI() {
  if (toDoList.length > 0) {
    cleanScreen("result");
    showToDoListUI();
    document.getElementById("delete_task")!.hidden = false;
    document.getElementById("interface")!.hidden = true;

  } else {
    document.getElementById("result")!.innerHTML = `To Do List is empty. Please select <b>Add a Task</b> to start a new list.`
  }    
}

function deleteTaskUI() {
  let option = (document.getElementById("erase_task") as HTMLFormElement).value;

  if(isNaN(option) || option <= 0 || option > toDoList.length || option % parseInt(option) != 0) {
    cleanInput("erase_task");
    document.getElementById("result")!.innerHTML = `<span style="color:red;">Error: invalid value. Please try again</span>`;

  } else {
    let task: string = toDoList[option -1].task;
    deleteTask(option -1);
    cleanInput("erase_task");
    showToDoListUI();

    document.getElementById("result")!.innerHTML = `Task "<b>${task}</b>" has been deleted from the To Do List`;
    document.getElementById("delete_task")!.hidden = true;
    document.getElementById("interface")!.hidden = false;
  }
}