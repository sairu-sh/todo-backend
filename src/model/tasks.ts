import BaseModel from "./baseModel";
import { Task } from "./TASK";
import { TaskList } from "./TASKLIST";
import { GetTasksQuery } from "../interfaces/tasks";

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

  static countAll(params: any) {
    const query = this.queryBuilder()
      .table("tasks")
      .count({ count: "id" })
      .first();

    if (params.addedDate) {
      query.where("added_date", "<=", params.addedDate);
    }

    return query;
  }

  static async getTasksByType(params: any, isCompleted: boolean | null = null) {
    const query = this.queryBuilder()
      .select({
        id: "id",
        title: "title",
        description: "description",
      })
      .from("tasks");

    if (isCompleted !== null) {
      query.where("isCompleted", "=", isCompleted);
    }

    query.offset(params.offset).limit(params.limit);

    if (params.addedDate) {
      query.where("addedDate", "<=", params.addedDate);
    }

    return query;
  }

  static async getAll(params: any) {
    return this.getTasksByType(params, null);
  }

  static async getCompleted(params: any) {
    return this.getTasksByType(params, true);
  }

  static async getRemaining(params: any) {
    return this.getTasksByType(params, false);
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
