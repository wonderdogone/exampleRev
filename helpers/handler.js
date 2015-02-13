'use strict'
var _ = require('underscore');
var seeddata = require('./db.js');

var currentProducts = seeddata.Products;


exports.mainProduct = function(req, res){
    var path_request = req.params.product_request;
    for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].id === path_request) {
          var quickoutput = [currentProducts[i]];
          res.json(quickoutput);
        }
    }
};

exports.addProduct = function(req, res){
  var n = req.body;
  var id = {id: 'dummyid'}
 //id would normally be dynamic
  _.extend(n, id);
  currentProducts.push(n);
  res.send('Good POST');
};
