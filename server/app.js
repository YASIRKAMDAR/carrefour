var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
//var users = require('./routes/users');

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));  

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  });
}

var app = express();

var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);

/* POST Login request. */
app.post('/api/login', function(req, res, next) {
  console.log("in login");  
  res.send({ LoggedIn: "Y" });
});

/* GET Login request. */
app.get('/api/results', function(req, res, next) {
  res.send({ results : 
    [{
      img: "ImgSrc",
      name: "iphone 6",
      price: "AED 2000"
    }
    ,{
      img: "ImgSrc",
      name: "iphone 6s",
      price: "AED 3000"
    },{
      img: "ImgSrc",
      name: "iphone 7",
      price: "AED 3700"
    }]
   });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
