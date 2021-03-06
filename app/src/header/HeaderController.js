"use strict";
var game = angular.module('hiremeapp.header', [
    'ngMaterial'
])
.controller('HeaderController', ['$mdSidenav', '$scope', 'AuthenticationService', 'userServices', function($mdSidenav, $scope, AuthenticationService, userServices){
    var self = this;
    var originatorEv;
    var userId = AuthenticationService.user._id;

    self.openMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };

    self.toggleSidebar = function() {
        $mdSidenav('left').toggle();
    }

    self.signOut = function(){
        AuthenticationService.logOut();
    }

    userServices.listFriendRequests().then(function successCallback(response) {
        self.friendRequestNumber = response.data.friend_requests.length;
        self.friendRequestList = response.data.friend_requests;
    }, function errorCallback(response) {
        //TODO
    });


    self.addFriend = function(friend, ev){
        userServices.addFriend({user_to_add_id: friend._id}).then(function successCallback(response) {
          self.friendRequestList = self.friendRequestList.filter(function(el) { //remove from interface
              return el._id !== friend._id;
          });
          self.friendRequestNumber--;
        }, function errorCallback(response) {
            //TODO
        });
    }

    self.removeFriendRequest = function(friend, ev){
        userServices.removeFriendRequest({user_to_remove_id: friend._id}).then(function successCallback(response) {
          self.friendRequestList = self.friendRequestList.filter(function(el) { //remove from interface
              return el._id !== friend._id;
          });
          self.friendRequestNumber--;
        }, function errorCallback(response) {
            //TODO
        });
    }

    var pusher = new Pusher('5ae72eeb02c097ac4523', {
      cluster: 'eu',
      encrypted: true
    });

    var channel = pusher.subscribe("private-"+AuthenticationService.user._id);

    channel.bind('client-friend-request', function(data) {
      $scope.$apply(function() {
        self.friendRequestNumber++;
        self.friendRequestList.push(data);
     });
    });

}]);
