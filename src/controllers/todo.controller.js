const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");


router.get("", async(req, res) => {
    try{
        const todos = await Todo.find().lean().exec();

        return res.status(201).send(todos);
    }
    catch(err) {
        return res.status(500).send({message: err});
    }
});

router.post("/", async(req, res) => {
    try{
        const todos = await Todo.create(req.body);
        return res.status(201).send(item);
    }
    catch(err) {
        return res.status(500).send({message: err})
    }
});

module.exports = router;