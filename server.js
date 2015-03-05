'use strict';
var express = require('express');
var mongoose = require('mongoose');
var heroRoutes = require('./routes/heroRoutes');
var passport = require('passport');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/heroesapp_development');

var app = express();
app.set('appSecret', process.env.SECRET || 'I’mTheGoddamnBatman');
app.use(passport.initialize());
require('./lib/passport_strat')(passport);
 
var heroRouter = express.Router();
var userRouter = express.Router();

heroRoutes(heroRouter, app.get('appSecret'));
require('./routes/userRoutes')(userRouter, passport, app.get('appSecret'));

app.use('/api/v1', heroRouter);
app.use('/api/v1', userRouter);

app.listen((process.env.PORT || 3000), function() {
  console.log('server listening on port ' + (process.env.PORT || 3000));
});
