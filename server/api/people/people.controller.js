/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var repo = require('../../components/repository');   

exports.search = function(req, res) {
    repo
    .search(req.params.searchTerm)
    .then(function(results) {
        res.json(results)
    });
};

exports.get = function(req, res) {
    repo
    .list(50)
    .then(function(results) {
        res.json(results)
    });
};

exports.show = function(req, res) {
    repo
    .getById(req.params.personId)
    .then(function(results) {
        res.json(results)
    });
};
