const assert = require('assert');
const filter = require('../src/functionLib').filter;

const isEven = function(number) {
  return number % 2 == 0;
}

const isOdd = function(number) {
  return !isEven(number);
}

describe("filter", function() {
  it("with array of single element should return truthy value for given predicate", function() {
    assert.deepEqual(filter(isEven,[2]),[2]);
    assert.deepEqual(filter(isEven,[13]),[]);
    assert.deepEqual(filter(isOdd,[13]),[13]);
    assert.deepEqual(filter(isOdd,[2]),[]);
  });

  it("with array of multiple element should return all truthy values of array for given predicate", function() {
    assert.deepEqual(filter(isEven,[1,2,3]),[2]);
    assert.deepEqual(filter(isOdd,[1,2,3]),[1,3]);
  });

  it("with empty array should return empty array", function() {
    assert.deepEqual(filter(isOdd,[]),[]);
    assert.deepEqual(filter(isEven,[]),[]);
  });

  it("with array of element 0 should return same array or empty array", function() {
    assert.deepEqual(filter(isOdd,[0]),[]);
    assert.deepEqual(filter(isEven,[0]),[0]);
  });
});
