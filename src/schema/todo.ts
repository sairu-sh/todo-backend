import Joi from "joi";

const getTasksSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1).messages({
    "number.base": "Page should be an integer",
  }),

  size: Joi.number().integer().min(1).max(40).default(10).messages({
    "number.base": "Size should be an integer",
  }),
});

const createTaskSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Title is required",
  }),

  description: Joi.string().allow("").messages({
    "string.base": "Description should be a string",
  }),
});

const taskOperationSchema = Joi.object({
  id: Joi.string().length(10).required().messages({
    "any.required": "Task ID is required",
    "string.length": "Task ID should be exactly 10 characters long",
  }),
});

export { getTasksSchema, createTaskSchema, taskOperationSchema };
