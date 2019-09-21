var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/',function (req,res) {
    res.render('login');
});

router.post('/',function (req,res) {
    var user = req.body.user;
    var pass = req.body.pass;
    db.query('select *from user_table where user_name = "'+user+'"',function (row) {
        console.log(row);
        if(row.length == 0){
            res.render('login',{errr:'用户不存在！！！'}); //render后面不能加斜杠
            // res.redirect('/login');
        }
        else{
            db.query('select * from user_table where password = "'+pass+'"',function(row){
                console.log(row);
                if(row.length == 0){
                    res.render('login',{err:'密码错误！！！'}); //render后面不能加斜杠
                    // res.redirect('/login');
                }
                else
                    res.redirect('/center');
            });
        }
    });
});

module.exports = router;