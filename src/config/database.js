const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://bhanuprakashkasireddy:Bhanuprakash842@ebbounty.udxq4.mongodb.net/devTinder"
    );
};

module.exports = connectDB;

