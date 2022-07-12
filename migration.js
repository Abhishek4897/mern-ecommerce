import mysql from "mysql";
import migration from "mysql-migrations";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_demo'
});

migration.init(connection, __dirname + '/Migrations', function() {
  console.log("finished running migrations");
});
