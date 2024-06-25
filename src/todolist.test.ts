import { addTask } from "./todolist";
import { completeTask } from "./todolist";
import { deleteTask } from "./todolist";
import { toDoList } from "./todolist";

describe("Add a task", () => {
    test("Creates 2 task and then checks the length of To-Do list, which should be 2", () => {
        addTask("Lavar los platos");
        addTask("Pasear a Coco");
        expect(toDoList.length).toBe(2);
    });
});

describe("Check list content", () => {
    test("Checks To-Do list content at position 1", () => {
        expect(toDoList[1]).toEqual({task: "Pasear a Coco", completed: false});
    });
});

describe("Complete a task", () => {
    test("Mark task 2 as completed and the value of this.completed should be true", () => {
        completeTask(1);
        expect(toDoList[1].completed).toBe(true);
    });
});

describe("Delete a task", () => {
    test("Deletes task 2 and checks the length of the list, which should be 1", () => {
        deleteTask(1);
        expect(toDoList.length).toBe(1);
    });
});