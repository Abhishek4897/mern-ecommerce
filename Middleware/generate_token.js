import jwt from "jsonwebtoken";
import connection from '../Config/config.js';
const token_secret='my_token_secret';
  var token = function (req, res, next) {
    var email=req.body.email;
    if (!email) return res.status(400).send('Details not provided')
   
    req.token = jwt.sign({ id: email }, token_secret, {
        expiresIn: 86400 // expires in 24 hours
      });
    next()
  }

export default token