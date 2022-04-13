const express = require("express");
const app = express();
const cors = require("cors");

const todoController = require("./controllers/todo.controller");

app.use(cors());
app.use(express.json());

app.use("/todos", todoController);

module.exports = app;