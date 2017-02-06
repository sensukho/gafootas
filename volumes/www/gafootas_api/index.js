'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4200;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/gafootas',(err, res) => {
    if (err) {
        throw err;
    }else{
        app.listen( port, () => {
            console.log('GAFOOTAS IN THE SEA !!!');
        });
    }
});