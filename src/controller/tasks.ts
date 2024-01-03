import { Request, Response, NextFunction } from "express";
import * as taskServices from "../service/tasks";
import NotFoundError from "../error/taskNotFound";

export const getAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = taskServices.getAll();

    if (data === null) {
      throw new NotFoundError("no tasks found");
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
};

type CreateTaskParams = {
  title: string;
  description?: string;
};

export const createTask = (req: Request, res: Response) => {
  const { title, description = "" }: CreateTaskParams = req.body;
  const status = taskServices.createTask({ title, description });
  if (status) res.sendStatus(201);
  else res.sendStatus(500);
};

export const getCompleted = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = taskServices.getCompleted();

    if (data === null) {
      throw new NotFoundError("no tasks found");
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
};

export const getRemaining = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = taskServices.getRemaining();

    if (data === null) {
      throw new NotFoundError("no tasks found");
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
};

export const toggleCompleted = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = taskServices.toggleCompleted(req.params.id as string);
    console.log(data);
    if (!data) {
      throw new NotFoundError(`task with id: ${req.params.id} not found`);
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = taskServices.deleteTask(req.params.id as string);

    if (status) {
      res.sendStatus(204);
    } else {
      throw new NotFoundError(`task with id: ${req.params.id} not found`);
    }
  } catch (error) {
    next(error);
  }
};
