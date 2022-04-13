const app = require("./index");
const connect = require("./config/db");

app.listen(4000, async() => {
    try{
        await connect();
        console.log("listening on port 4000");
    }
    catch(err) {
        console.log('err', err)

    }
    console.log("listening on port 4000");
})