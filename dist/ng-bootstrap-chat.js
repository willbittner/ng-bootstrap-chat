(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('ngBootstrapChat.config', [])
      .value('ngBootstrapChat.config', {
          debug: true
      });

  // Modules
  angular.module('ngBootstrapChat.directives', []);
  angular.module('ngBootstrapChat.services', []);
  angular.module('ngBootstrapChat',
      [
          'ngBootstrapChat.config',
          'ngBootstrapChat.directives',
          'ngBootstrapChat.services',
          'ngResource'
      ]);

})(angular);

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
    angular.module('ngBootstrapChat.directives', ['luegg.directives'])
        // .controller('ChatCtrl', ['$scope', function ($scope) {
        //     console.log('Chat ctrl function');
        //     var vm2Ctrl = this;
        //     var isHidden = false;
        //     vm2Ctrl.messages = $chatSession.messages;
        //     vm2Ctrl.username = $chatSession.username;
        //     vm2Ctrl.inputPlaceholderText = $chatSession.inputPlaceholderText;
        //     vm2Ctrl.submitButtonText = $chatSession.submitButtonText;
        //     vm2Ctrl.title = $chatSession.title;
        //     vm2Ctrl.theme = 'chat-th-' + $chatSession.theme;
        //     vm2Ctrl.writingMessage = '';
        //     vm2Ctrl.submitFunction = function () {
        //         $chatSession.submitFunction()(vm2Ctrl.writingMessage, vm2Ctrl.username);
        //         vm2Ctrl.writingMessage = '';
        //     };
        //     vm2Ctrl.panelStyle = {
        //         'display': 'block'
        //     };
        //     vm2Ctrl.chatButtonClass = 'glyphicon-minus icon_minim';
        //     vm2Ctrl.toggle = toggle;
        //     function toggle() {
        //         if (isHidden) {
        //             vm2Ctrl.chatButtonClass = 'glyphicon-minus icon_minim';
        //             vm2Ctrl.panelStyle = {
        //                 'display': 'block'
        //             };
        //             isHidden = false;
        //         } else {
        //             vm2Ctrl.chatButtonClass = 'glyphicon-plus icon_minim';
        //             vm2Ctrl.panelStyle = {
        //                 'display': 'none'
        //             };
        //             isHidden = true;
        //         }
        //     }
        // }])
        .directive('ngChat', ['chatSession', function (chatSession) {
            console.log('ng-chat before return');
            return {
                restrict: 'EA',
                templateUrl: 'tpl/chatWindow.tmpl',
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
                link: function (scope, chatSession) {
                    console.log('ng-chat in link ');
                    if (!chatSession.inputPlaceholderText) {
                        chatSession.inputPlaceholderText = 'Write your message here...';
                    }
                    if (!chatSession.submitButtonText || chatSession.submitButtonText === '') {
                        chatSession.submitButtonText = 'Send';
                    }
                    if (!chatSession.title) {
                        chatSession.title = 'Chat';
                    }
                },
            };
        }]);
})(angular);

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
