const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./model/user");


//When we keep the / route here , all the routes will be of same.So the sequence of the routes matters
//Order of writing the routes matter alot

// // This will handle all the http requests as the order of writing thr routes matter alot
// // app.use("/user",(req,res) =>{
// //     res.send("Hahaha");
// // });

// //This will only handle GET call to /user
// app.get("/user",(req,res) => {
//     res.send({firstName:"Bhanu",lastName:"Prakash"});
// });

// app.post("/user",(req,res) =>{
//     //Saving data to DB
//     res.send("Data successfully saved to the database!");
// })

// app.delete("/user",(req,res) =>{
//     res.send("Deleted Successfully!!");
// })

// //this will match all the HTTP method API calls to test
// app.use("/test",(req,res) => {
//     res.send("Hello from the server!!");
// });


// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     res.send({firstName:"Bhanu",lastName:"Prakash"});
// });

//For the dynamic routes we give as 

// app.get("/user/:userId/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send({firstName:"Bhanu",lastName:"Prakash"});
// });



//?-/ac,/abc works
//+-/abbbbc => shoukd start with a and containing any number of b'send with c
//*-/abbhanuc => should start with ab and anything should be present in the place of * and end with c
//We can also group things (bc)? which means without bc also the route works
//We can also use the Regex like /a/ which means any route containing a will go to that route 
// /.*fly$/ - It should start with any word but end with fly only without any additional letters.

// app.use("/route",rH1,rH2,rH3,rH4,rH5);

// app.use("/user",(req,res,next)=>{
//     //Route Handler
//     //res.send("Route Handler 1");
//     console.log("Router Handler 1");
//     next();//We will get an error again as we are responding with two responses
//     // res.send("Response!!");//When the next function also sends the response then we will get the error in the console because we cannot change the response once the response is sent 
//     // next();
// // },
// // (req,res,next)=>{
// //     console.log("Handling the route 2");
// //     // res.send("2nd Response!!");
// //     next();
// // },
// // (req,res,next)=>{
// //     console.log("Handling the route 3");
// //     // res.send("3rd Response!!");
// //     next();
// // },
// // (req,res,next)=>{
// //     console.log("Handling the route 4");
// //     // res.send("4th Response!!");
// //     next();
// // },
// // (req,res,next)=>{
// //     console.log("Handling the route 5");
// //     res.send("5th Response!!");
// });

// //The above can also be written as
// app.use("/user",(req,res,next)=>{
//     res.send("Route Handler 1");
// })

// const {adminAuth} = require("./middlewares/auth");
// const {userAuth} = require("./middlewares/auth");

// //For admin auth we use the middlewares
// //Handle Auth Middleware for only GET
// app.use("/admin",adminAuth);


// app.get("/user/data",userAuth,(req,res)=>{
//         res.send("User Data Sent");
// });

// app.get("/user/login",(req,res)=>{
//     res.send("User logged in succesfully");//For user login there is no authorization
// })

// app.get("/admin/getAllData",(req,res)=>{
//     //Logic of checking if the request is Authorized
//         res.send("All Data Sent");
// });

// app.get("/admin/deleteUser",(req,res)=>{
//     //Logic for checking the request is authorized
//     res.send("Dleted a User");
// });

// app.get("/getUserData",(req,res)=>{
//     try{
//         //Logic of Db call abnd get user data

//     throw new Error("dvmdjfk");
//     res.send("User Data Sent");
//     }
//     catch(err)
//     {
//         res.status(500).send("Something Went Wrong");
//     } 
// });

// app.use("/",(err,req,res,next)=>{
//     if(err)
//     {
//         //Log your error message
//         res.status(500).send("Something Went Wrong");
//     }
// });

app.use(express.json());

app.post("/signup",async (req,res) => {
    // Creating a new instance of the user model
    // const user = User({
    //     firstName : "MS",
    //     lastName : "Dhoni",
    //     emailId : "ms@dhoni.com",
    //     password : "ms123",
    //     //__v is added in the db 
    // });

    const user = User(req.body);
    try{
    await user.save();
    res.send("User Added Successfully!");
    }
    catch(err){
        res.status(400).send("Error saving the user :"+err.message);
    }
    // // const user = new User(userObj);
    console.log(req.body);
})

connectDB().then(()=>{
    console.log("Database connection established...")
    app.listen(7777,() =>{
        console.log("Server is successfully listening on port 7777...")
    })
})
    .catch((err)=>{
        console.error("Database cannot be connected!!");
    });


