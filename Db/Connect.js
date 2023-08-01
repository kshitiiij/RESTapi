const mongoose = require("mongoose");

//uri is the mongodb url passed from ProductDB and mongoose.connect method takes the URL and an object.

const connectDB = (uri) => {
    console.log("db connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;