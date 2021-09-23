const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
    email: {
        type:String,
        required:true
    },
    followers:{
        type:[String],
    },
    following:{
        type:[String]
    },
    W_E :{
        type:[String]
    },
    A_O_E:{
        type:[String]
    },
    images:{
        type:[String]
    },
});

module.exports= Userinfo = mongoose.model("usersinfo",UserInfoSchema);