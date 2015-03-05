'use strict';

var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
  hero: String,
  identity: {type: String, default: 'Unknown'}
});

module.exports = mongoose.model('Hero', heroSchema);

