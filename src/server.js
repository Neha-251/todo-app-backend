const app = require("./index");
const connect = require("./config/db");

app.listen(4125, async() => {
    try{
        await connect();
        console.log("listening on port 4125");
    }
    catch(error) {
        console.log('err', error.message);

    }
    //console.log("listening on port 4000");
})