/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app, server) {

  // Insert routes below
  app.use('/api/people', require('./api/people'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|bower_components|components|app|assets)/*')
   .get(errors[404]);

   app.route('/views/:viewName')
   .get(function(req, res) {
      res.render(req.params.viewName); 
   });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
        res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        //res.render('layout');
    });
};
