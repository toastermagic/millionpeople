'use strict';

var express = require('express');
var controller = require('./people.controller');

var router = express.Router();

router.get('/search/:searchTerm', controller.search);
router.get('/show/:personId', controller.show);
router.get('/list', controller.get);

module.exports = router;