'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('ngBootstrapChat');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('ngBootstrapChat.config')).to.be.ok;
  });

  

  
  it('should load directives module', function() {
    expect(hasModule('ngBootstrapChat.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('ngBootstrapChat.services')).to.be.ok;
  });
  

});