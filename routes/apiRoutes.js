const storage = require("../db/storage.js")

module.exports = function(app) {

    app.get('/api/notes', function(req, res) {
        res.json(storage);
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
