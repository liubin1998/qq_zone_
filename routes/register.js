var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/',function (req,res) {
    res.render('register');
});
router.post('/',function (req,res) {
    //get方法取参数：req.query.user
    //post 方法取参数，req.body.user

    var user = req.body.user;
    var pass = req.body.pass;
    db.query('select * from user_table where user_name = "'+user+'"',function (row) {
        console.log(row);

        if(row.length == 0){
            db.query('insert into user_table values("'+user+'","'+pass+'")',function (row) {
                console.log(row);
            });
            // res.render('index',{title:'Express'});
            res.redirect('/login');
        }else {
            res.render('register',{err:'用户已经被注册'});
            //跳转的路径
            // res.redirect('/register');
        }
    });
});
// router.get('/',function (req,res) { //get也可以为 post，这个是method方式有多种选择
//     res.render('register');
// });

module.exports = router;