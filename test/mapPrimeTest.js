const assert = require('assert');
const lib = require('../src/functionLib.js');
const mapPrime = lib.mapPrime;

//========================(mapPrime function test)==============\\

const square = function(number) {
  return number*number;
}

const squareRoot = function(number) {
  return Math.sqrt(number);
}

describe("mapPrime", function() {
  it("of an array of one element should return an array of one element", function() {
    assert.deepEqual(mapPrime(square, [1]), [1]);
    assert.deepEqual(mapPrime(squareRoot, [1]), [1]);
    assert.deepEqual(mapPrime(square, [0]),[0]);
    assert.deepEqual(mapPrime(squareRoot, [0]),[0]);
  });
  it("of an array of multiple elements should return an array of multiple elements", function() {
    assert.deepEqual(mapPrime(square, [1,2]), [1,4]);
    assert.deepEqual(mapPrime(square, [1,2,3,4]), [1,4,9,16]);
    assert.deepEqual(mapPrime(squareRoot, [1,4]), [1,2]);
    assert.deepEqual(mapPrime(squareRoot, [1,4,9,16]), [1,2,3,4]);
  });
  it("of an empty array should return an empty array", function() {
    assert.deepEqual(mapPrime(square, []),[]);
    assert.deepEqual(mapPrime(squareRoot, []),[]);
  });
});
