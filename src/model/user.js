const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength:4,
        maxLength:30
    },
    lastName : {
        type: String,
        minLength:4,
    },
    emailId : {
        type: String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
    },
    password : {
        type: String,
        required:true
    },
    age : {
        type : Number,
        min:8,
        max:60
    },
    gender :{
        type: String,
        validate(value){
            if(!["male","female","others"].includes(value))
            {
                throw new Error("Gender is not valid");
            }
        }
    },
    about :{
        type:String,
        default:"This is the default about section"
    },
    skills:{
        type:[String],
    }
},{
    timestamps:true,
});

module.exports = mongoose.model("User",userSchema);