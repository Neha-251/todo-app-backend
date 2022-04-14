const express = require("express");
const router = express.Router();
const CompletedTodo = require("../models/completed.model");


router.get("", async(req, res) => {
    try{
        const todos = await CompletedTodo.find().lean().exec();

        return res.status(201).send(todos);
    }
    catch(err) {
        return res.status(500).send({message: err});
    }
});

router.post("/", async(req, res) => {
    try{
        const todos = await CompletedTodo.create(req.body);
        return res.status(201).send(todos);
    }
    catch(err) {
        return res.status(500).send({message: err})
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const todo = await CompletedTodo.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"todo":todo});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});



module.exports = router;