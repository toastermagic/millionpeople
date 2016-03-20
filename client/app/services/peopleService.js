'use strict';

angular
.module('peopleApp')
.factory('peopleService', [ '$http', function ($http) {
    
    return {
        listPeople: function() {
            var url = '/api/people/list/';
            // console.log('Sending request', url);
            return $http
                .get(url);
        },
        getPeople: function(searchTerm) {
            var url = '/api/people/search/' + searchTerm;
            // console.log('Sending request', url);
            return $http
                .get(url);
        },
        getPerson: function(personId) {
            var url = '/api/people/show/' + personId;
            //console.log('Sending request', url);
            return $http
                .get(url);
        }
    };
}]);