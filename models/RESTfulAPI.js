/**
 * Created by yichengwang on 17/1/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RESTfulAPISchema = new Schema({
    Title:          { type: String },
    URL:            { type: String, required: true },
    Method:         { type: String },
    URL_Params:     { type: String },
    DATA_Params:    { type: String },
    Sample:         { type: String },
    Response :      { type: Object }
});


mongoose.model('RESTfulAPI', RESTfulAPISchema);