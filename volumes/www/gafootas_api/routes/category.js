'use strict'

var express = require('express');
var CategoryController = require('../controllers/category');

var api = express.Router();

api.get( '/category/list', CategoryController.getCategoryList);
api.get( '/category/view/:id', CategoryController.getCategory);
api.post( '/category/save', CategoryController.saveCategory);
api.put( '/category/update/:id', CategoryController.updateCategory);
api.delete( '/category/delete/:id', CategoryController.deleteCategory);

module.exports = api;