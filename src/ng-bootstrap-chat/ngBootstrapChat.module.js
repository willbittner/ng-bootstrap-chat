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
