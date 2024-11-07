const express = require("express");

const app = express();
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

app.use("/user",(req,res,next)=>{
    //Route Handler
    //res.send("Route Handler 1");
    console.log("Router Handler 1");
    next();//We will get an error again as we are responding with two responses
    // res.send("Response!!");//When the next function also sends the response then we will get the error in the console because we cannot change the response once the response is sent 
    // next();
},
(req,res,next)=>{
    console.log("Handling the route 2");
    // res.send("2nd Response!!");
    next();
},
(req,res,next)=>{
    console.log("Handling the route 3");
    // res.send("3rd Response!!");
    next();
},
(req,res,next)=>{
    console.log("Handling the route 4");
    // res.send("4th Response!!");
    next();
},
(req,res,next)=>{
    console.log("Handling the route 5");
    res.send("5th Response!!");
});


app.listen(7777,() =>{
    console.log("Server is successfully listening on port 7777...")
});