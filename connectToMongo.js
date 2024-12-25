const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://kunalbhika:Kunalbhika1#@cluster0.h5tpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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