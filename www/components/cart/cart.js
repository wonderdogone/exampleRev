
'use strict'
﻿angular.module("cart", ['ngResource'])
.factory("cart", function ($resource, $http, $routeParams) {
  return $http.get('/phones' + $routeParams.productId, { cache: true });
});
