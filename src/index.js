const express = require("express");
const app = express();
const cors = require("cors");

const todoController = require("./controllers/todo.controller");
const completedtodoController = require("./controllers/completedtodo.controller");



app.use(cors());
app.use(express.json());

app.use("/todos", todoController);
app.use("/completedTodos", completedtodoController);


module.exports = app;