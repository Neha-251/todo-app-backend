const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://neha:1234@cluster0.bmr0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
}

module.exports = connect;