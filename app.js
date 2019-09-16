var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register'); //添加路径
var deleteRouter = require('./routes/delete');
var ltj1Router = require('./routes/ltj1');
var tengxunRouter = require('./routes/tengxun');
var y_diamondRouter = require('./routes/y_diamond');
var GFQQzoneRouter = require('./routes/GFQQzone');
var Tencent_classRouter = require('./routes/Tencent_class');

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
app.use('/ltj1',ltj1Router);
app.use('/tengxun',tengxunRouter);
app.use('/y_diamond',y_diamondRouter);
app.use('/GFQQzone',GFQQzoneRouter);
app.use('/Tencent_class',Tencent_classRouter);

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
