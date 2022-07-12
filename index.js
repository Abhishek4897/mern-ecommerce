import Route from "./routes/routes.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
app.set("view engine", "ejs");
import con from "./config/config.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8000;
app.listen(port,()=> {
console.log('listen port 8000');
})
app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/',Route);



