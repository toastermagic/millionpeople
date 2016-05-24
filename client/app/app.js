'use strict';

angular.module('peopleApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngMaterial',
    'peopleControllers',
    'btford.socket-io'
])
.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .accentPalette('deep-purple');
    // 	.primaryPalette('green')
    // 	.backgroundPalette('grey')
}])
.config(function($mdIconProvider) {
    $mdIconProvider
        .iconSet('action', '../assets/iconsets/action-icons.svg', 24)
        .iconSet('alert', '../assets/iconsets/alert-icons.svg', 24)
        .iconSet('av', '../assets/iconsets/av-icons.svg', 24)
        .iconSet('communication', '../assets/iconsets/communication-icons.svg', 24)
        .iconSet('content', '../assets/iconsets/content-icons.svg', 24)
        .iconSet('device', '../assets/iconsets/device-icons.svg', 24)
        .iconSet('editor', '../assets/iconsets/editor-icons.svg', 24)
        .iconSet('file', '../assets/iconsets/file-icons.svg', 24)
        .iconSet('hardware', '../assets/iconsets/hardware-icons.svg', 24)
        .iconSet('icons', '../assets/iconsets/icons-icons.svg', 24)
        .iconSet('image', '../assets/iconsets/image-icons.svg', 24)
        .iconSet('maps', '../assets/iconsets/maps-icons.svg', 24)
        .iconSet('navigation', '../assets/iconsets/navigation-icons.svg', 24)
        .iconSet('notification', '../assets/iconsets/notification-icons.svg', 24)
        .iconSet('social', '../assets/iconsets/social-icons.svg', 24)
        .iconSet('toggle', '../assets/iconsets/toggle-icons.svg', 24)
        .iconSet('avatar', '../assets/iconsets/avatar-icons.svg', 128);
})
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
})
.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) {
            var newPhrase = phrase.replace(/\s/g, '|');
            text = text.replace(new RegExp('(' + newPhrase + ')', 'gi'), '<span class="highlighted">$1</span>');
        }
        return $sce.trustAsHtml(text);
    };
})
.filter('getById', function() {
    return function(input, id) {
        var i = 0, len = input.length;
        for (; i < len; i++) {
            if (+input[i].id === +id) {
                return input[i];
            }
        }
        return null;
    };
})
.factory('socket', function(socketFactory) {
    return socketFactory({ port:6000 });
});