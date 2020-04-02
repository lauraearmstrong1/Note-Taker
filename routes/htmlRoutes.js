// const path = require("path");
// //var express = require("express");
// const router = express.Router()

var path = require("path");

module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no matching route is found default to home

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.post("/api/notes", function (req, res) {
        
        if (note.length < 5) {
            note.push(req.body);
            res.json(true);
        }
        else {
            note.push(req.body);
            res.json(false);
        }
    });
  }












// module.exports = function(router) {

//   router.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
//   });


//   router.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
// };






//module.exports = router


// var express = require('express')
// var router = express.Router()
// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
// // define the home page route
// router.get('/', function (req, res) {
//   res.send('Birds home page')
// })
// // define the about route
// router.get('/about', function (req, res) {
//   res.send('About birds')
// })