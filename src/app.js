const express = require("express");

const app = express();

app.use("/",(req,res) => {
    res.send("Hello from the dashboard..");
});

app.use("/test",(req,res) => {
    res.send("Hello from the server!!");
});

app.use("/hello",(req,res) => {
    res.send("Hello Hello Hello");
});

app.listen(7777,() =>{
    console.log("Server is successfully listening on port 7777...")
});