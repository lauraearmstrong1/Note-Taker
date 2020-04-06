
const noteData = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    // req.body is available since we're using the body parsing middleware
    var newNote = req.body;
    let id 
    if(noteData.length){

     id = noteData[noteData.length - 1].id + 1
    }else id = 1
    newNote.id = id 
    noteData.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(noteData), err=>{
      if(err) throw err
      else res.json(noteData);
    })
  });
  

  app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    var position = noteData.findIndex(note=> note.id === parseInt(id))
    noteData.splice(position, 1);
    fs.writeFile('./db/db.json', JSON.stringify(noteData), err=>{
      if(err) throw err
      else res.json(noteData);
    })
  });

  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });
}


