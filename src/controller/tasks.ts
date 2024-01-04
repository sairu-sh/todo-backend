import { Request, Response, NextFunction } from "express";
import * as taskServices from "../service/tasks";
import NotFoundError from "../error/taskNotFound";

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await taskServices.getAll();

    if (data === null) {
      throw new NotFoundError("no tasks found");
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req: Request, res: Response) => {
  const body = req.body;
  const data = await taskServices.createTask(body);
  if (data !== null) res.sendStatus(201);
  else res.sendStatus(500);
};

export const getCompleted = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await taskServices.getCompleted();

    if (data === null) {
      throw new NotFoundError("no tasks found");
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
};

export const getRemaining = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await taskServices.getRemaining();

    if (data === null) {
      throw new NotFoundError("no tasks found");
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
};

export const toggleCompleted = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await taskServices.toggleCompleted(Number(req.params.id));
    if (!data) {
      throw new NotFoundError(`task with id: ${req.params.id} not found`);
    } else {
      res.status(200).send("updated");
    }
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await taskServices.deleteTask(req.params.id as string);

    if (data !== null) {
      res.status(204).send("successfully deleted");
    } else {
      throw new NotFoundError(`task with id: ${req.params.id} not found`);
    }
  } catch (error) {
    next(error);
  }
};
