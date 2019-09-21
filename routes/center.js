var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function(req, res,) {
    db.query('select * from tab_saysay',function (row) {
        console.log(row);
        res.render('center',{row:row});
    });
});
router.post('/',function (req,res) {
    var publish = req.body.publish;
    db.query('insert into tab_saysay values("img/head-picture.jpg","柳西原","2019-9-6","'+publish+'","")',function (row) {
        console.log(row);
        // res.redirect('/center');
        //  res.json("success");
    });
    db.query('select * from tab_saysay limit 1,1',function (row) {
        console.log(row);
        res.json(row);
    });
});

    module.exports = router;