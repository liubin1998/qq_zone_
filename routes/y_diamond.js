var express = require('express');
var rounter = express.Router();

rounter.get('/',function (req,res) {
    res.render('y_diamond');
}),

    module.exports = rounter;

