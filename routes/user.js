import express from "express";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
} from "../controller/userController.js";

export const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/", createUser)
  .delete("/:id", deleteUserById);
