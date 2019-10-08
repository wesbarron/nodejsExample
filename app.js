const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send("hello world home page");
});

app.get("/about", function(req, res){
    res.send("hello youve reached about");
});

app.listen(port, function(){
    console.log(port)
});