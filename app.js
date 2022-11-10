var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
console.log("Connection to DB succeeded")}); 



  var jewellery = require("./models/jewellery");
// We can seed the collection if needed on server start 
async function recreateDB() {
  // Delete everything 
  await jewellery.deleteMany();

  let instance1 = new jewellery({ jewellery_name: "Daimonds", jewellery_size: 25, jewellery_type: "small" });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

  let instance2 = new jewellery({ jewellery_name: "Gold", jewellery_size: 20, jewellery_type: "large" });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });

  let instance3 = new jewellery({ jewellery_name: "platinum", jewellery_size: 3, jewellery_type: "Small" });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("third object saved")
  });

}

let reseed = true;
if (reseed) { recreateDB(); }


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jewelleryRouter = require('./routes/jewellery');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var jewellery = require("./models/jewellery");

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
app.use('/jewellery', jewelleryRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
