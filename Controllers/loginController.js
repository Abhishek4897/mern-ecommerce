import connection from '../Config/config.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const token_secret='my_token_secret';

export const register = async (resquest, response) => {
    var hashedPassword = bcrypt.hashSync(resquest.body.password, 8);
    var sql="INSERT INTO users (name, email, password, remember_token) VALUES ('" + resquest.body.name+"', '"+resquest.body.email+"','"+hashedPassword+"','"+resquest.token+"')";
    connection.query(sql, function (err, user, fields) {
      if (err) return response.status(500).send(err)

      response.status(200).send({ auth: true, token: resquest.token, user: user });
    });
}

export const login = async (resquest, response) => {
    var hashedPassword = resquest.body.password;
    var sql="SELECT * FROM users WHERE email = '" + resquest.body.email +"'";
    await connection.query(sql, function (err, user, fields) {
      if (err) return response.status(500).send(err)

      if(user.length==0)return response.status(200).send('Email not exist.')

      bcrypt.compare(hashedPassword, user[0].password, (err, res) => {
        if (res) {
          var sql = "UPDATE users SET remember_token = '" + resquest.token +"' WHERE id = '" + user[0].id+"'";
          connection.query(sql, function (err, result) {
            if (err) throw err;
          });
         
          response.status(200).send({ auth: true, token: resquest.token});
        } else {
          return response.status(200).send('Password not Correct.')
        } 
    })
        
    });
}