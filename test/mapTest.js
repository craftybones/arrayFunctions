const assert = require('assert');
const lib = require('../src/functionLib.js');
const map = lib.map;

//========================(map function tests)==============\\

const square = function(number) {
  return number*number;
}

const squareRoot = function(number) {
  return Math.sqrt(number);
}

describe("map", function() {
  it("testing with single element array", function() {
    assert.deepEqual(map(square, [1]), [1]);
    assert.deepEqual(map(squareRoot, [1]), [1]);
  });
  it("testing with multiple elements array", function() {
    assert.deepEqual(map(square, [1,2]), [1,4]);
    assert.deepEqual(map(square, [1,2,3,4]), [1,4,9,16]);
    assert.deepEqual(map(squareRoot, [1,4]), [1,2]);
    assert.deepEqual(map(squareRoot, [1,4,9,16]), [1,2,3,4]);
  });
  it("testing with array contain element 0 and empty array", function() {
    assert.deepEqual(map(square, [0]),[0]);
    assert.deepEqual(map(squareRoot, [0]),[0]);
    assert.deepEqual(map(square, []),[]);
    assert.deepEqual(map(squareRoot, []),[]);
  });
});
