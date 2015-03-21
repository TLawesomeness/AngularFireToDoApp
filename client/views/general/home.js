/*global Firebase:true */
'use strict';

angular.module('angular-prototype')
.controller('HomeCtrl', ['$scope', function($scope) {

  var ref = new Firebase('https://angfiretodoapp.firebaseio.com/fblogin');

  $scope.fbLogin = function() {
    ref.authWithOAuthPopup('facebook', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
      }
    });
  };


}]);

// https://auth.firebase.com/v2/angfiretodoapp/auth/facebook/callback
