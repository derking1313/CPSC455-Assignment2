"use strict";

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
        res.sendFile(__dirname + "/home.html");
        var fName = req.body.fName;
        var lName = req.body.lName;
        var Username = req.body.Username;
        var Password = req.body.Password;
        var Email = req.body.Email;
        add(fName, lName, Username, Password, Email);
});

function add(fName, lName, Username, Password, Email) {
        var jsonxml = require("jsontoxml");
        var xml = jsonxml({
                bankers:[
                        {name: "banker", children: [
                                {name: "email", text: Email},
                                {name: "username", text: Username},
                                {name: "password", text: Password},
                                {name: "firstname", text: fName},
                                {name: "lastname", text: lName},
                                {name: "accounts"}
                        ]}
                ]
        })

        console.log(xml);
}
 

app.listen(3000);
