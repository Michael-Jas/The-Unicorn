angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $http, $ionicModal) {
  $scope.photos = [];
  var searchItem;

  $scope.landing = function(resp) {
    $http.get("http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&limit=100&q=unicorn").then(function(resp) {
      for (var i = 0; i < resp.data.data.length; i++) {
        $scope.photos.push(resp.data.data[i].images.original.url);
      }
    }, function(err) {
      alert('ERR', err);
    })
  }

  $scope.showImages = function(index) {
		$scope.activeSlide = index;
		$scope.showModal('templates/image-popover.html');
	}

  $scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	}

  $scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove()
	};

})
