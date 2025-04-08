import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
const port = 8088;
const app = express();
app.use(json());

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/user", (req, res) => {
//   const { username, password } = req.body;
//   if (username.length < 5) {
//     res
//       .send({
//         success: false,
//         message: "username must have 5 characters",
//       })
//       .end();
//   }

//   if (password.length < 8) {
//     res
//       .send({
//         success: false,
//         message: "password must have 8 characters",
//       })
//       .end();
//   }

//   res
//     .send({
//       success: true,
//       message: "user created",
//     })
//     .end();
// });
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// get - medeelel avah
// post - create
// put - uptade
// delete - del

let users = [];
app.post("/user/create", (req, res) => {
  const { username, gender, age, email, password } = req.body;
  users.push({
    username,
    password,
    gender,
    age,
    email,
    id: uuidv4(),
  });
  res.send({
    success: true,
  });
});
app.get("/users", (_, res) => {
  res.send(users);
});

app.get("/user", (req, res) => {
  const { id } = req.body;
  console.log(req.body, "req");
  const user = users.find((user) => {
    return user.id === id;
  });

  res.send({ email: user.email });
});

app.delete("/user/delete", (req, res) => {
  const { id } = req.body;
  users = users.filter((user) => user.id !== id);
  res.send({
    success: true,
    message: "ustsan",
  });
});

app.put("/user/uptade", (req, res) => {
  const { id, username, email, gender, age, password } = req.body;

  users.map((user) => {
    if (user.id === id) {
      user.username = username;
      user.email = email;
      user.gender = gender;
      user.age = age;
      user.password = password;
    }
    return user;
  });

  res.send({
    success: true,
    message: "uptaded",
  });
});
