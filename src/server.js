const app = require("./index");
const connect = require("./config/db");

app.listen(4123, async() => {
    try{
        await connect();
        console.log("listening on port 4123");
    }
    catch(err) {
        console.log('err', err)

    }
    //console.log("listening on port 4000");
})