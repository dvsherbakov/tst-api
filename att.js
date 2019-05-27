const pgp = require("pg-promise")(/*options*/);
const conString = "postgres://ds:gzaktpf6@localhost:5432/ds";
var db = pgp(conString);

db.any('SELECT * FROM student')
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        // error;
    });