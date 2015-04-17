(function (angular, undefined) {
    'use strict';
    // function fakeNgModel(initValue) {
    //     return {
    //         $setViewValue: function(value) {
    //             this.$viewValue = value;
    //         },
    //         $viewValue: initValue
    //     };
    // }
    angular.module('ngBootstapChat.directives', ['luegg.directives'])
        .controller('ngBootstrapChatCtrl', ['$scope', function ($scope) {
            var vm = this;
            var isHidden = false;
            vm.messages = $scope.messages;
            vm.username = $scope.username;
            vm.inputPlaceholderText = $scope.inputPlaceholderText;
            vm.submitButtonText = $scope.submitButtonText;
            vm.title = $scope.title;
            vm.theme = 'chat-th-' + $scope.theme;
            vm.writingMessage = '';
            vm.submitFunction = function () {
                $scope.submitFunction()(vm.writingMessage, vm.username);
                vm.writingMessage = '';
            };
            vm.panelStyle = {
                'display': 'block'
            };
            vm.chatButtonClass = 'glyphicon-minus icon_minim';
            vm.toggle = toggle;

            function toggle() {
                if (isHidden) {
                    vm.chatButtonClass = 'glyphicon-minus icon_minim';
                    vm.panelStyle = {
                        'display': 'block'
                    };
                    isHidden = false;
                } else {
                    vm.chatButtonClass = 'glyphicon-plus icon_minim';
                    vm.panelStyle = {
                        'display': 'none'
                    };
                    isHidden = true;
                }
            }
        }])
        .directive('ngBootstapChat', function () {
            return {
                restrict: 'EA',
                templateUrl: 'ngBootstrapChat.tmpl',
                replace: true,
                scope: {
                    messages: '=',
                    username: '=',
                    inputPlaceholderText: '@',
                    submitButtonText: '@',
                    title: '@',
                    theme: '@',
                    submitFunction: '&'
                },
                link: function (scope) {
                    if (!scope.inputPlaceholderText) {
                        scope.inputPlaceholderText = 'Write your message here...';
                    }
                    if (!scope.submitButtonText || scope.submitButtonText === '') {
                        scope.submitButtonText = 'Send';
                    }
                    if (!scope.title) {
                        scope.title = 'Chat';
                    }
                },
                controller: ngBootstrapChatCtrl,
                controllerAs: 'vm'
            };
        });
}(angular));
