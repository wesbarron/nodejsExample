var http = require('http');
var path = require('path');
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: false}));
const Todo = require('./models/todo.model');
const mongoDB = 'mongodb+srv://testConnection:b8RwqJYgo4hD1xhe@nodetodoexample-iqnde.mongodb.net/comp?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));

var teams = [];

app.get('/', function(req, res){
    Todo.find(function(err, todo){
        if(err){
            console.log(err);
        }else{
            teams=todo;
        }
    });
    res.render("index", {teamNames:teams});
});

app.post('/addteam', function(req, res){
    let newTodo = new Todo({
        teamName: req.body.newteam,
        score: 0
    });
    newTodo.save(function(err){
        if (err){
            console.log(err);
        }
        res.redirect('back');
    });
});

app.post('/updatescore', function(req, res){
    var data = req.body.nameScore;
    console.log(data);
    var nameScore = data.split(',')
    var name = nameScore[0];
    var score = parseInt(nameScore[1], 10) + 1;
    Todo.updateOne({teamName: name},{score: score}, function(err){
        console.log(err);
    });
    res.redirect('back');
});


http.createServer(app).listen(port, function(){
});

