'use strict';

angular
.module('peopleApp')
.directive('personTile', function () {
    return {
        restrict: 'E',
        templateUrl: '/views/personTile',
        scope: {
            person: '=',
            vm: '='
        },
        //link: function (scope, element, attributes) {
        link: function () {
        }
    };
});