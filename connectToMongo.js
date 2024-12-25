const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/urlshortner";
const connectToMongo = () => {
    mongoose.connect(mongoURI)
    .then(() => {
        console.log("connected to mongo");
    })
    .catch((err) => {
        console.log("failed connecting to database : " , err);
    });
}

module.exports = connectToMongo;