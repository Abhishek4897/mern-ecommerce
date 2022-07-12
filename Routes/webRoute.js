import  Express  from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
     const   webRouter=Express.Router()
     webRouter.get('/login',function(req,res){
       console.log(__dirname);
       const appRoot = dirname.resolve(__dirname);
       console.log(appRoot);
        res.sendFile('E:/older data/practise_node/Nodetraining/Views/login.html');
      });


export default webRouter