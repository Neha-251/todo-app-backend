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
        return res.status(201).send(todos);
    }
    catch(err) {
        return res.status(500).send({message: err})
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"todo":todo});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});



module.exports = router;