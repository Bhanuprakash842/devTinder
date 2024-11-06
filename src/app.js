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

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstName:"Bhanu",lastName:"Prakash"});
});



//?-/ac,/abc works
//+-/abbbbc => shoukd start with a and containing any number of b'send with c
//*-/abbhanuc => should start with ab and anything should be present in the place of * and end with c
//We can also group things (bc)? which means without bc also the route works
//We can also use the Regex like /a/ which means any route containing a will go to that route 
// /.*fly$/ - It should start with any word but end with fly only without any additional letters.
app.listen(7777,() =>{
    console.log("Server is successfully listening on port 7777...")
});