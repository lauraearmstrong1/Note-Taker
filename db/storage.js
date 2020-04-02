const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app); //passing in app which is express

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});








// var http = require("http");
// var fs = require("fs");


// //class Storage




// fs.readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

//   const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });