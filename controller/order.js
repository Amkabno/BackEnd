import { v4 as uuidv4 } from "uuid";

const orders = [];
export const createOrder = (req, res) => {
  const { userId, totalPrice, food } = req.body;
  orders.push({
    userId,
    totalPrice,
    food,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
    id: uuidv4(),
  });
  res.send({
    success: true,
    message: "user created",
  });
};

export const getOrders = (_, res) => {
  res.send(orders);
};
