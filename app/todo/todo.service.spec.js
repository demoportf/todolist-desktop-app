'use strict';
 
var chai = require('chai')
  , expect = chai.expect;
var mocha = require('mocha');
  var describe = mocha.describe
  var it = mocha.it

var TodoServiceModule = require('./todo.service');
 
describe('The TodoService', function() {
  var TodoService;
 
  beforeEach(function() {
    TodoService = new TodoServiceModule();
  });
 
  it('should have some todos initially', function() {
    var todos = TodoService.getTodos();
    expect(todos.length).to.equal(4);
    expect(todos[0].title).to.equal('Buy milk');
  });
});