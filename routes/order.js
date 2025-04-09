import express from "express";
import { createOrder } from "../controller/order.js";

export const orderRouter = express.Router();

orderRouter.post("/", createOrder);
