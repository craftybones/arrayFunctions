const assert = require('assert');
const filterPrime = require('../src/functionLib').filterPrime;

const isEven = function(number) {
  return number % 2 == 0;
}

const isOdd = function(number) {
  return !isEven(number);
}

describe("filterPrime", function() {
  it("with array of single element should return truthy value for given predicate", function() {
    assert.deepEqual(filterPrime(isEven,[2]),[2]);
    assert.deepEqual(filterPrime(isEven,[13]),[]);
    assert.deepEqual(filterPrime(isOdd,[13]),[13]);
    assert.deepEqual(filterPrime(isOdd,[2]),[]);
  });

  it("with array of multiple element should return all truthy values of array for given predicate", function() {
    assert.deepEqual(filterPrime(isEven,[1,2,3]),[2]);
    assert.deepEqual(filterPrime(isOdd,[1,2,3]),[1,3]);
  });

  it("with empty array should return empty array", function() {
    assert.deepEqual(filterPrime(isOdd,[]),[]);
    assert.deepEqual(filterPrime(isEven,[]),[]);
  });

  it("with array of element 0 should return same array or empty array", function() {
    assert.deepEqual(filterPrime(isOdd,[0]),[]);
    assert.deepEqual(filterPrime(isEven,[0]),[0]);
  });
});
