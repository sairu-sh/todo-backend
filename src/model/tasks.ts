import { getRandomId } from "../utils/utils";
import { Task } from "./TASK";
import { TaskList } from "./TASKLIST";

const taskList = new TaskList();
const task1 = new Task("title");
taskList.addToList(task1);

type CreateTaskParams = {
  title: string;
  description?: string;
};

export function createTask({ title, description }: CreateTaskParams) {
  const task = new Task(title, description);
  taskList.addToList(task);
  return "success";
}

export function getAll() {
  return taskList.list;
}

export function getCompleted() {
  return taskList.list.filter((task) => task.isCompleted);
}

export function getRemaining() {
  return taskList.list.filter((task) => !task.isCompleted);
}

export function toggleCompleted(id: string) {
  const task = taskList.list.find((task) => task.id === id);
  task?.toggleCompleted();
  return task;
}

export function deleteTask(id: string) {
  const task = taskList.list.find((task) => task.id === id);
  if (task) {
    taskList.removeFromList(id);
    return true;
  } else return false;
}
