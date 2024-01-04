import { Router } from "express";
import {
  createTask,
  getAll,
  getCompleted,
  getRemaining,
  toggleCompleted,
  deleteTask,
} from "../controller/tasks";
import { validateReqBody, validateReqQuery } from "../middleware/validator";
import {
  createTaskSchema,
  getTasksSchema,
  taskOperationSchema,
} from "../schema/todo";

const router = Router();

router.get("/", validateReqQuery(getTasksSchema), getAll);
router.get("/completed", validateReqQuery(getTasksSchema), getCompleted);
router.get("/remaining", validateReqQuery(getTasksSchema), getRemaining);
router.post("/", validateReqBody(createTaskSchema), createTask);
router.patch("/:id", toggleCompleted);
router.delete("/:id", deleteTask);

export default router;
