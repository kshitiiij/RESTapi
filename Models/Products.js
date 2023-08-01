// this uses the Schema function of mongoose which is a framework of MongoDB and define the schema 
// for the database.
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema( {
    model : {
        type : String,
        required : true,
    },
    brand : {
        type : String,
        required : true,
    },
    year : {
        type : Number,
    },

});

//you will keep the name singular here and it will get plural in the db;
module.exports = mongoose.model('Product',ProductSchema);