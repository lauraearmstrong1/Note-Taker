var http = require("http");
var fs = require("fs");

var express = require('express');
var path = require("path");

var notesArr = [];

var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app); //passing in app which is express

//-----------------------------------------------------------------------
//code below with Mehesh all in one file

app.get("/api/notes", function (req, res) {
  res.json(noteArr);
});


app.post("api/notes", function (req, res) {
  var newNote = req.body;
  notesArr.push(newNote);
  fs.writeFile(__dirname + "db/db.json", JSON.stringify(notesArr), function (notesArr) {
    res.json(newNote);
  });
});


app.get("api/notes", function (req, res) {
  fs.readFile(__dirname + "db/db.json", function (err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});


app.delete("/api/notes/:id", function(req, res) {
  var id = req.params.id;
  var note = notesArr[id];
  notesArr.slice(id,id + 1);
  console.log("notesArr", notesArr)
  fs.writeFile(__dirname + "db/db.json", JSON.stringify(notesArr), function (err) {
    if(err) throw err;
    res.json(note);
});
});

app.listen(PORT, function () {
  fs.readFile(__dirname + "/db/db.json", function (err, data) {
    if (err) throw err;
    notesArr = JSON.parse(data);
  })
  console.log("App listening on PORT: " + PORT);
});



