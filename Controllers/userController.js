import connection from '../Config/config.js';

export const quote_list = async (resquest, response) => {

    var sql='SELECT * FROM quote';
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;

  
    response.status(200).json(data);
    
  });
}

export const add_quote = async (resquest, response) => {

    var sql="INSERT INTO quote (name, quote) VALUES ('" + resquest.body.name+"', '"+resquest.body.quote+"')";
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    response.status(201).json(data.insertId);
    
  });
}
