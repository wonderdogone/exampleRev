angular.module("mainMod", ["ngRoute", "ngResource", "cart"])
  //hardly any routes so sticking with basica ng-route

    .config(function ($httpProvider, $routeProvider) {

            $httpProvider.useApplyAsync(true);

            $routeProvider.when("/products/:productId", {
                templateUrl: "/views/product.html",
                controller: 'productCtrl'
            });

            $routeProvider.when("/finish", {
                templateUrl: "/views/thankYou.html"
            });

            $routeProvider.when("/add", {
                templateUrl: "/views/editorView.html"
            });

            $routeProvider.otherwise({
                templateUrl: "/views/productList.html"
            });
        })

    .constant("dataUrl","/test")
    .constant("productUrl","/phones")

    .controller("startCtrl", function ($scope, $http, $location, dataUrl) {
      $scope.data = {};

      $http.get(dataUrl)
      .success(function (data) {
        $scope.currentProducts = data;

      })
      .error(function (response) {
        $scope.data.error = response.error || response;
      });

      //TODO being cleaner put the follwing actions in a a seperate custom service
      $scope.makeProduct = function (product) {
        $scope.currentProducts = product || {};
        $location.path("/add");

      }

      $scope.createProduct = function (product) {
        //POST this data
        var order = angular.copy(product);

        $http.post('/add', order)
            .success(function (data) {
              console.log("great");
        })
            .error(function (error) {
              $scope.data.error = error;
        })
            .finally(function () {
              $location.path("/finish");
        });

      }

      $scope.saveEdit = function (product) {
          $scope.createProduct(product);

      }

    })
    //offload this to a cutom service this time just for fun
    .controller("productCtrl", function ($scope, $http, $resource, $routeParams, cart) {
      cart.then(function(response){
         $scope.pickle = response.data;
     });


    });
