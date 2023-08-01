//using dotenv to bring the MONGODB_URL
require("dotenv").config();

// bringing the Schema , the data and the connectDB file to finally connect the db with the server.
const Product = require("./Models/Products");
const ConnectDB = require("./Db/Connect");
const ProductsJSON = require("./Products.json")

const start = async () => {
    try {
        await ConnectDB(process.env.MONGODB_URL);
        await Product.create(ProductsJSON);
        console.log("success!");

    } catch(error) {
        console.log(error);
    }
}


start();