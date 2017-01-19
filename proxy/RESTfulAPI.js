/**
 * Created by yichengwang on 19/1/2017.
 */
var models = require('../models');
var API = models.RESTfulAPI;

exports.newAndSave = function(doc, callback) {

    var api = new API();
    api.Title = doc.Title;
    api.URL = doc.URL;
    api.Method = doc.Method;
    api.URL_Params = doc.URL_params;
    api.DATA_Params = doc.DATA_params;
    api.Sample = doc.Sample;
    api.Response = doc.Response;

    api.save(function(err, data) {
        if(err) {
            console.log(err);
            return callback.error(err);
        } else {
            return callback.success(data);
        }
    });
};

exports.update = function(query, update, callback) {
    API.findOneAndUpdate(query, {$set: update}, function(err, data) {
        if (err) {
            return callback.error(err);
        } else {
            return callback.success(data);
        }
    });
};

exports.delete = function(query, callback) {
    API.findOneAndRemove(query, function(err) {
        if (err) {
            return callback.error(err);
        } else {
            return callback.success({code: 1, msg: ""});
        }
    });
};

exports.retrieve = function(callback) {
    API.find({}, function(err, data) {
        if (err) {
            return callback.error(err);
        } else {
            return callback.success(data);
        }
    });
};