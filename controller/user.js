export const createUser = (req, res) => {
  const { username, gender, age, email } = req.body;

  const user = user.find((user) => user.email === email);

  if (user) {
    return response
      .send({
        success: false,
        message: "email already taken",
      })
      .end();
  }

  username.push({
    username,
    gender,
    age,
    email,
    id: uuidv4(),
  });
  res.send({
    success: true,
    message: "user created",
  });
};

export const getUsers = (_, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => {
    return user.id === id;
  });
  if (!user) {
    res.send({
      success: false,
      message: "user not found",
    });
  }
  res.send(user);
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send({
    success: true,
    message: "ustsan",
  });
};

export const putUser = (req, res) => {
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
};
