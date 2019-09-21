var mysql = require('mysql');
var db = {};
db.query = function (sql, callback) {
    var connect = mysql.createConnection(
        {
            host:'localhost',
            user:'root',
            password:'123',
            port:3306,
            database:'qqzone'
        }
    );
    connect.connect();
    connect.query(sql,function (err,row,fields) {
        console.log(err);
        callback(row);
    });
    connect.end();
};
module.exports = db;