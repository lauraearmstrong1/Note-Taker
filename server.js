var http = require("http");


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


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

