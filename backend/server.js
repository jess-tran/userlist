const express = require("express");
const users = require("./data");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const filteredUsers = users.map(({ id, name, address, phone }) => {
  return {
    id,
    name,
    address,
    phone
  };
});

app.get("/api/users", (req, res) => {
  if (filteredUsers) {
    res.json(filteredUsers);
  } else {
    res.status(400).json(`Error: ${error}`);
  }
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));

  if (user) {
    res.json(filteredUsers.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(404).json({
      message: `The user with the id of ${req.params.id} was not found.`
    });
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
