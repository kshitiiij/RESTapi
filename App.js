//This is starting point of the server.
// .env is file where you can keep sensitive details and can access through dotenv.config();
require("dotenv").config();
const express = require("express");
const app = express();

//if any port is mentioned in .env then it will take that either port 3000;
const PORT = process.env.PORT || 3000;

//Routes and Controllers and worked together , Routes will define when to do and Controllers will define what to do;
const products_route = require("./Routes/Products");

//this help us in setup the database and connect with the server;
const connectDB = require("./Db/Connect");

//this is compressed version of Routes and Controllers.
app.get("/", (req,res) => {
    res.send("server is running!");
});

//Middleware or router setup
app.use("/api/products", products_route);


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} is listening`);
        })
    } catch(error) {
        console.log(error);
    }
}

start();