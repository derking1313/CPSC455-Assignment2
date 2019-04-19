"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const url = require("url");
var parseString = require("xml2js").parseString;
var jsonxml = require("jsontoxml")
var app = express();
var xml = jsonxml ({"bankers": []});
var jsonString;
var i = 0;

var xml = jsonxml({
                users:[
                        {name: "banker", children: [
                                {name: "email", text: "Emailaaa@email"},
                                {name: "username", text: "usernameaa"},
                                {name: "password", text: "passwordaa"},
                                {name: "firstname", text: "gyromeaae"},
                                {name: "lastname", text: "hatcheara"},
                                {name: "accounts"}
                        ]}
                ]
});





app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function(req, res){
        res.sendFile(__dirname + "/login.html");

});

app.get("/register", function(req, res){
        res.sendFile(__dirname + "/register.html");
});


app.post("/login", function(req, res) {
        var fName = req.body.fName;
        var lName = req.body.lName;
        var Username = req.body.Username;
        var Password = req.body.Password;
        var Email = req.body.Email;
        add(fName, lName, Username, Password, Email);
        res.sendFile(__dirname + "/login.html");
});


function add(fName, lName, Username, Password, Email) {
        i = i + 1;
        console.log(xml);
        xml2js.parseString(xml, {trim:true}, function(err, result) {
                jsonString = result;
        });

        jsonString.users.banker[i] = [
                                {name: "email", text: Email},
                                {name: "username", text: Username},
                                {name: "password", text: Password},
                                {name: "firstname", text: fName},
                                {name: "lastname", text: lName},
                                {name: "accounts"}
                                ]

        for (let j = 0; j <= i; j++){
        console.log(jsonString.users.banker[j]);
        }

}



 

app.listen(3000);
