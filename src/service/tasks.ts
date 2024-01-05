import { SlowBuffer } from "buffer";
import TaskModel from "../model/tasks";
import { buildMeta, getPaginationOptions } from "../utils/pagination";
import { GetTasksQuery } from "../interfaces/tasks";

type CreateTaskParams = {
  title: string;
  description?: string;
};

export const createTask = async (body: CreateTaskParams) => {
  const status = await TaskModel.createTask(body);
  return status;
};

export const getAll = async (query: GetTasksQuery) => {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });

  const tasksPromise = TaskModel.getAll({ ...pageDetails, ...query });
  const countPromise = TaskModel.countAll(query);

  const [tasks, count] = await Promise.all([tasksPromise, countPromise]);

  const total = count.count;
  const meta = buildMeta(total, size, page);

  return {
    data: tasks,
    meta,
  };
};

export const getCompleted = async (query: GetTasksQuery) => {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });

  const tasksPromise = TaskModel.getCompleted({ ...pageDetails, ...query });
  const countPromise = TaskModel.countAll(query);

  const [tasks, count] = await Promise.all([tasksPromise, countPromise]);

  const total = count.count;
  const meta = buildMeta(total, size, page);

  return {
    data: tasks,
    meta,
  };
};

export const getRemaining = async (query: GetTasksQuery) => {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });

  const tasksPromise = TaskModel.getRemaining({ ...pageDetails, ...query });
  const countPromise = TaskModel.countAll(query);

  const [tasks, count] = await Promise.all([tasksPromise, countPromise]);

  const total = count.count;
  const meta = buildMeta(total, size, page);

  return {
    data: tasks,
    meta,
  };
};

export const toggleCompleted = async (id: number) => {
  const data = await TaskModel.toggleCompleted(id);
  return data;
};

export const deleteTask = async (id: string) => {
  const status = await TaskModel.deleteTask(id);

  return status;
};
