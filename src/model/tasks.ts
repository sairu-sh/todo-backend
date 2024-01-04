import BaseModel from "./baseModel";
import { Task } from "./TASK";
import { TaskList } from "./TASKLIST";
import knex from "knex";

const taskList = new TaskList();
const task1 = new Task("title");
taskList.addToList(task1);

type CreateTaskParams = {
  title: string;
  description?: string;
};

export default class TaskModel extends BaseModel {
  static async createTask(body: CreateTaskParams) {
    return this.queryBuilder().insert(body).table("tasks");
  }

  static async getAll() {
    return this.queryBuilder()
      .select({
        id: "id",
        title: "title",
        description: "description",
      })
      .from("tasks");
  }

  static async getCompleted() {
    return this.queryBuilder()
      .select({
        id: "id",
        title: "title",
        description: "description",
      })
      .from("tasks")
      .where({ isCompleted: true });
  }

  static async getRemaining() {
    return this.queryBuilder()
      .select({
        id: "id",
        title: "title",
        description: "description",
      })
      .from("tasks")
      .where({ isCompleted: false });
  }

  static async toggleCompleted(id: number) {
    return this.queryBuilder()
      .update({
        isCompleted: this.queryBuilder().raw('NOT "is_completed"'),
      })
      .from("tasks")
      .where({ id });
  }

  static async deleteTask(id: string) {
    return this.queryBuilder().delete().from("tasks").where({ id });
  }
}
