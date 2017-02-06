'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = Schema({
    name: String,
    description: String,
    parent: String
});

module.exports = mongoose.model('Category', CategorySchema);