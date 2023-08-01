// Controllers will define the function , what to do whenever they are being called from Routes.

const Product = require("../Models/Products");

const getAllProducts = async (req,res) => {
    // const myData = await Product.find({brand:"Ford"});
    //req.query is basically used for searching sorting filtering and pagination
    // query is in the form of key value pair and if more than one query then seperated with ampersand.
    const myData = await Product.find(req.query);
    // console.log(req.query);
    res.status(200).json({myData});
};

const getAllProductsTesting = async (req,res) => {
    res.status(200).json({msg: "I am getAllProductsTesting"});
};

module.exports = {getAllProducts, getAllProductsTesting} ;