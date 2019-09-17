var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register'); //添加路径
var deleteRouter = require('./routes/delete');
var ltjRouter = require('./routes/ltj');
var ltj2Router = require('./routes/ltj2');
var ltj3Router = require('./routes/ltj3');
var tengxunRouter = require('./routes/tengxun');
var y_diamondRouter = require('./routes/y_diamond');
var GFQQzoneRouter = require('./routes/GFQQzone');
var Tencent_classRouter = require('./routes/Tencent_class');
var centerRouter = require('./routes/center');
var downloadRouter = require('./routes/download');
<<<<<<< HEAD
var qqshezhiRouter = require('./routes/qqshezhi');
=======
var qqgameRouter = require('./routes/qqgame');
>>>>>>> 夏彬第二次上传

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/delete',deleteRouter);
app.use('/ltj',ltjRouter);
app.use('/ltj2',ltj2Router);
app.use('/ltj3',ltj3Router);
app.use('/tengxun',tengxunRouter);
app.use('/y_diamond',y_diamondRouter);
app.use('/GFQQzone',GFQQzoneRouter);
app.use('/Tencent_class',Tencent_classRouter);
app.use('/center',centerRouter);
app.use('/download',downloadRouter);
<<<<<<< HEAD
app.use('/qqshezhi',qqshezhiRouter);

=======
app.use('/qqgame',qqgameRouter);
>>>>>>> 夏彬第二次上传

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
