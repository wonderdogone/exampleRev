'use strict'
var handler = require('./handler.js');
var seeddata = require('./db.js');


//putting get routes here to keep them organized
module.exports = function(app) {
  //TODO data in another module a level deeper
  var currentProducts = seeddata.Products; //TODO move this call to hanlders

  app.get('/test', function(req, res) {
    res.json(currentProducts);
  });


  app.get('/phones:product_request', handler.mainProduct);
  app.post('/add', handler.addProduct);

};
