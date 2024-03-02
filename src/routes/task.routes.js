import { Router } from "express";
import {
  createTask,
  deleteTask,
  foundTasks,
} from "../controllers/taskController.js";
import { dataValidatorMidd } from "../middleware/validatorUser.js";
import { taskSchemaZ } from "../schemas/taskSchema.js";
import { authValidator } from "../middleware/validatorAuth.js";

const taskRoute = Router();

taskRoute.get("/task", authValidator, foundTasks);

taskRoute.post(
  "/task",
  authValidator,
  dataValidatorMidd(taskSchemaZ),
  createTask
);

taskRoute.delete("/task/delete/:id", authValidator, deleteTask);

export default taskRoute;
