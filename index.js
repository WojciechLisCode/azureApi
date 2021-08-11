const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const TodoList = require("./models").todoList;

app.use(express.json());

const port = 4000;

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);

app.post("/echo", (req, res) => {
  res.json(req.body);
});

// Create a new user account
app.post("/users", async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

//get user buy id
app.get("/users/:id", async (request, response, next) => {
  try {
    const userId = parseInt(request.params.id);
    console.log(userId);
    const user = await User.findByPk(userId);
    console.log(user);

    if (!user) {
      response.status(404).send("User not found");
    } else {
      response.send(user);
    }
  } catch (e) {
    next(e);
  }
});

//get todoLists
app.get("/todoLists", async (request, response, next) => {
  try {
    const lists = await TodoList.findAll();
    console.log(lists);

    response.send(lists);
  } catch (e) {
    next(e);
  }
});

//create list
app.post("/todoLists", async (req, res, next) => {
  try {
    const { name, deadline, userId } = req.body;
    if (!name || !deadline || !userId) {
      res.status(400).send("Must provide data");
    } else {
      const list = await TodoList.create(req.body);
      res.json(list);
    }
  } catch (e) {
    next(e);
  }
});

//updadte list
app.put("/todoLists/:todoListId", async (req, res, next) => {
  try {
    const { name, deadline, userId } = req.body;
    const todoListId = parseInt(req.params.todoListId);
    const todoListToUpdate = await TodoList.findByPk(todoListId);
    if (!todoListToUpdate) {
      res.status(404).send("List not found");
    } else {
      const updatedTodoList = await todoListToUpdate.update(req.body);
      res.json(updatedTodoList);
    }
  } catch (e) {
    next(e);
  }
});
//lists by user
app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (user) {
      res.send(user.todoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});
