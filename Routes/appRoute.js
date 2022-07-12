import  Express  from "express";
import {register,login} from "../controllers/loginController.js"
import generate_token from "../Middleware/generate_token.js"

    const   authRouter=Express.Router()
            authRouter.get('/',generate_token,login)
            authRouter.post('/register',generate_token,register)
            authRouter.post('/login',generate_token,login)
          


export default authRouter