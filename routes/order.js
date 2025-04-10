import express from "express";
import { createOrder } from "../controller/orderController.js";

export const orderRouter = express.Router();

orderRouter.post("/", createOrder);
