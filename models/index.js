/**
 * Created by yichengwang on 17/1/2017.
 */
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db, function(err) {
    if (err) {
        console.log(err);
        console.log("Mongodb connection fails!");
    } else {
        console.log("Mongodb connected!")
    }
});

require('./RESTfulAPI');

exports.RESTfulAPI = mongoose.model('RESTfulAPI');