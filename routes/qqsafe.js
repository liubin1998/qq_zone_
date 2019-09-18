var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('qqsafe');
});

module.exports = router;