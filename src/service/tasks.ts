import { SlowBuffer } from "buffer";
import TaskModel from "../model/tasks";

type CreateTaskParams = {
  title: string;
  description?: string;
};

export const createTask = async (body: CreateTaskParams) => {
  const status = await TaskModel.createTask(body);
  return status;
};

export const getAll = async () => {
  const data = await TaskModel.getAll();

  return data;
};

export const getCompleted = async () => {
  const data = await TaskModel.getCompleted();

  return data;
};

export const getRemaining = async () => {
  const data = await TaskModel.getRemaining();

  return data;
};

export const toggleCompleted = async (id: number) => {
  const data = await TaskModel.toggleCompleted(id);
  return data;
};

export const deleteTask = async (id: string) => {
  const status = await TaskModel.deleteTask(id);

  return status;
};
