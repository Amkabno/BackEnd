import express, { json } from "express";
import { orderRouter } from "./routes/order.js";
import { userRouter } from "./routes/user.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;

const app = express();

let users = [];
app.use(json());
app.use(cors());
app.use("/user", userRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// get - medeelel avah
// post - create
// put - uptade
// delete - del
