// const storage = require("../storage.js")

// module.exports = function(app) {

//     app.get('/api/notes', function(req, res) {
//         res.json(storage);
//     });
// }



var noteData = require("../db/db.json");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  
 
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    // req.body is available since we're using the body parsing middleware
    var newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
  });


  app.delete("/api/notes/:id", function(req, res) {
    var id = req.params.id;
    noteData.slice(id, id);
    res.json(noteData);
  });
}






// module.exports = function(router) {

//   //Getting the note
//   router.get("public/notes", function(req, res) {
//     res.json(tableData);
//   });

//   // API POST Requests -- add the note
//   router.post("public/notes", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   //Delete the post when the trashcan button is pressed
//   router.delete("/public/notes", function(req, res) {
//     res.json(waitListData);
//   });
// };
