const mongoose = require("mongoose");

const completetodoSchema = new mongoose.Schema(
    {
        item: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Todo = mongoose.model("completedtodo", completetodoSchema);

module.exports = Todo;