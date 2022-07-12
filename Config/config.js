import mysql from "mysql";
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_demo'
});

connection.connect(function(err) {
    if (err) throw err;
});


export default connection