const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { userRouter } = require("./routers/user.route");
const { postRouter } = require("./routers/posts.router");
const { authenticate } = require("./middlewares/authenticate.middleware");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users",userRouter);
app.use(authenticate);
app.use("",postRouter);


app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("Connected to DB");
        console.log(`Server is runnig at port: ${process.env.PORT}`);
    }
    catch(err){
        console.log(err);
    }
})