import  Express  from "express";
import {quote_list,add_quote} from "../controllers/userController.js"
import auth from "../Middleware/auth.js"
     const   userRouter=Express.Router()
            userRouter.get('/quote_list',auth,quote_list)
            userRouter.post('/add_quote',auth,add_quote)
          


export default userRouter