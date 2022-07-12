import jwt from "jsonwebtoken";
import connection from '../Config/config.js';
const token_secret='my_token_secret';

  var check_token = function (req, res, next) {
    var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    var sql="SELECT * FROM users WHERE remember_token = '" + token +"'";
     connection.query(sql, function (err, user, fields) {
      if (err) return res.status(500).send(err)

      if(user.length==0){
        return res.status(401).send({ auth: false, message: 'Token  invalid.' });
      }
      
    })
    next()
  }


export default check_token