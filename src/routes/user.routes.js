import { Router } from "express";
import {
  loginUser,
  logoutUser,
  saveUser,
} from "../controllers/userControllers.js";
import { dataValidatorMidd } from "../middleware/validatorUser.js";
import {
  userSchemaLoginZ,
  userSchemaRegisterZ,
} from "../schemas/userSchema.js";
import { authValidator } from "../middleware/validatorAuth.js";

const userRoute = Router();

userRoute.post("/users", dataValidatorMidd(userSchemaRegisterZ), saveUser);
userRoute.post("/users/login", dataValidatorMidd(userSchemaLoginZ), loginUser);
userRoute.post("/users/logout", authValidator, logoutUser);

export default userRoute;
