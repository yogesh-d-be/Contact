const mongoose = require('mongoose');
const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    
})

const userContact = mongoose.model("contact",user);

module.exports = userContact;