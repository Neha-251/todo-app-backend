const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        item: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Todo = mongoose.model("todo", todoSchema);