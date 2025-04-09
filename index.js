import express, { json } from "express";
import { userRouter } from "./routes/user.js";
import { orderRouter } from "./routes/order.js";
const port = 8088;
const app = express();
app.use(json());

app.use("/user", userRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// get - medeelel avah
// post - create
// put - uptade
// delete - del
