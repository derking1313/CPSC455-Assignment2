var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const url = require("url");
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function(req, res){
        res.sendFile(__dirname + "/login.html");
});

app.get("/register", function(req, res){
        res.sendFile(__dirname + "/register.html");
});

app.post("/home", function(req, res) {
        userName = res.body.usr;
        passWord = res.body.psw;
        Validate(userName, passWord)
});

function Validate(userName, passWord) {

}
app.listen(3000);
