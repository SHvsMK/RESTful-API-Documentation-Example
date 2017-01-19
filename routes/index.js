var express = require('express');
var router = express.Router();
var controller = require('../controllers')
var RESTfulAPI = controller.RESTfulAPI;

/* GET home page. */
router.get('/RESTfulAPI', RESTfulAPI.showRESTfulAPI);

router.post('/RESTfulAPI', RESTfulAPI.getDoc, RESTfulAPI.addRESTfulAPI);

router.put('/RESTfulAPI', RESTfulAPI.getDoc, RESTfulAPI.editRESTfulAPI);

router.delete('/RESTfulAPI', RESTfulAPI.deleteRESTfulAPI);

module.exports = router;
