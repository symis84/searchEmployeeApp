'use strict';

describe('Controller: searchCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var searchCtrl, scope, timerCallback, httpBackend, Ajax, createController;
  var rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller,$httpBackend, $rootScope, _Ajax_) {
    timerCallback = jasmine.createSpy('timerCallback');
    
    httpBackend = $httpBackend;
    Ajax = _Ajax_;
    jasmine.clock().install();
    scope = $rootScope.$new();
    rootScope = $rootScope;


    createController = function() {
        return $controller('searchCtrl', {
            $scope: scope
        });
    };

    spyOn(Ajax, 'searchEmployeeResults').and.callFake(function() {
      return {
        success: function(callback) { return callback(
          [
            {name:'simone',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Alessandro',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Marco',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Luca',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Davide',age:'12',shoeSize:'9',title:'CTO'}
          ],'200','', ''  
        )},
        error: function(callback) { return '' }
      };
    });

  }));

  afterEach(function() {
      jasmine.clock().uninstall();
  });


  it('Title should be equal to Network Location Searches', function () {
    var controller = createController();
    expect(scope.msg).toEqual('Employee Searches');
  });


  it('scope.searchEmployeeResults should be equal to 5', function () {
    var controller = createController();
    expect(Ajax.searchEmployeeResults).toHaveBeenCalled();
    expect( scope.employeeResultsFilter.length ).toEqual(5);
  });


});
