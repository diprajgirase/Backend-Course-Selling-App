const mongoose = require('mongoose');
const express = require('express');
const app = express();

const { userRouter } = require("./routes/user")
const {  courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
app.use(express.json());

app.use("/user", userRouter)        //yaha prefix daal diye ki "/user" se jo bhi req ayega woh userRouter ke pass jyega 
app.use("/course", courseRouter)    //same here router ke prefix ko pehle hi define kr diye hai
app.use("/admin", adminRouter)

async function main(){              //yeh func isliye bnaye kyuki like aise bhi ho skta hai ki bina database connct hue hi server start ho jaye isliye ek async main func bnaye jispe phle database connect hoga uske bd server 3000 pe shuru hoga 
    //This will ensure ki phle database will get connected then ony server will start 
    await mongoose.connect("mongodb+srv://diprajrajput54:n4gHJXkTNTe7KtCa@cluster0.i8klm.mongodb.net/my-data")
    app.listen(3001);       

}

main();
