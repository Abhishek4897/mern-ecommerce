import  Express  from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
     const   webRouter=Express.Router()
     webRouter.get('/login',function(req,res){
        res.sendFile(process.env.INIT_CWD+'/Views/login.html');
      });


export default webRouter