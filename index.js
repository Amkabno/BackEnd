import express, { json } from "express";

const port = 8088;

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", (req, res) => {
  const { username, password } = req.body;
  if (username.length < 5) {
    res
      .send({
        success: false,
        message: "username must have 5 characters",
      })
      .end();
  }

  if (password.length < 8) {
    res
      .send({
        success: false,
        message: "password must have 8 characters",
      })
      .end();
  }

  res
    .send({
      success: true,
    })
    .end();
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
