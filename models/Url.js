const mongoose = require("mongoose");
const { Schema } = mongoose;

const Url = new Schema({
    shortId : {
        type : String ,
        required : true
    },
    actualUrl : {
        type : String ,
        required : true
    } ,
    clicks : {
        type : Number
    } ,
    author : {
        type : mongoose.Schema.Types.ObjectId ,
        required : true
    }
});

const UrlModel = mongoose.model('url' , Url);

module.exports = UrlModel;