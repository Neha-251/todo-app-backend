const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://neha:1234@cluster0.bmr0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
}