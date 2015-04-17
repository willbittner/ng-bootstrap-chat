(function (angular) {
    'use strict';
    // function fakeNgModel(initValue) {
    //     return {
    //         $setViewValue: function(value) {
    //             this.$viewValue = value;
    //         },
    //         $viewValue: initValue
    //     };
    // }
    angular.module('ngBootstrapChat.services')
        .service('chatSession', [function () {
            var vm = this;
            vm.messages = [{
                'username': 'Matt',
                'content': 'Hi!'
            }, {
                'username': 'Elisa',
                'content': 'Whats up?'
            }, {
                'username': 'Matt',
                'content': 'I found this nice AngularJS Directive'
            }, {
                'username': 'Elisa',
                'content': 'Looks Great!'
            }];
            vm.username = 'Matt';
            vm.sendMessage = function (message, username) {
                if (message && message !== '' && username) {
                    vm.messages.push({
                        'username': username,
                        'content': message
                    });
                }
            };
            this.isHidden = false;
            this.writingMessage = '';
            this.panelStyle = {
                'display': 'block'
            };
            this.chatButtonClass = 'glyphicon-minus icon_minim';
            this.submitFunction = function () {
                this.sendMessage(this.writingMessage, this.username);
                this.writingMessage = '';
            };
            this.toggle = function () {
                if (this.isHidden) {
                    this.chatButtonClass = 'glyphicon-minus icon_minim';
                    this.panelStyle = {
                        'display': 'block'
                    };
                    this.isHidden = false;
                } else {
                    this.chatButtonClass = 'glyphicon-plus icon_minim';
                    this.panelStyle = {
                        'display': 'none'
                    };
                    this.isHidden = true;
                }
            };
            return this;
        }]);
})(angular);
