/**
 * Created by yichengwang on 19/1/2017.
 */
var mongoose = require('mongoose');
var proxy = require('../proxy');
var API = proxy.RESTfulAPI;

exports.showRESTfulAPI = function(req, res) {
    var apis = {};
    API.retrieve({
        success: function success(data) {
            res.json(data);
        },
        error: function error(err) {
            res.status(201)
                .json(err);
        }
    });
};

exports.getDoc = function(req, res, next) {

    var doc = {
        Title:      req.body.title,
        URL:        req.body.url,
        Method:     req.body.method,
        URL_param:  req.body.url_params,
        DATA_param: req.body.data_params,
        Sample:     req.body.sample,
        Response:   req.body.response
    };

    req.body.doc = doc;

    next();
}

exports.addRESTfulAPI = function(req, res) {

    var doc = req.body.doc;

    API.newAndSave(doc, {
        success: function success(data) {
            res.json(data);
        },
        error: function error(err) {
            res.status(201)
                .json(err);
        }
    });
};

exports.editRESTfulAPI = function(req, res) {

    var query = {_id: req.body.id};
    var update = req.body.doc;

    API.update(query, update, {
        success: function(data) {
            res.json(data);
        },
        error: function(err) {
            res.status(201)
                .json(err);
        }
    });
};

exports.deleteRESTfulAPI = function(req, res) {
    var query = {_id: req.body.id};

    API.delete(query, {
        success: function success(msg) {
            res.json(msg);
        },
        error: function error(err) {
            res.status(201)
                .json(err);
        }
    });
};