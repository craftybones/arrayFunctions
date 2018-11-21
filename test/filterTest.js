const assert = require('assert');
const filter = require('../src/functionLib').filter;

const isEven = function(number) {
  return number % 2 == 0;
}

const isOdd = function(number) {
  return !isEven(number);
}

describe("filter", function() {
  it("testing with single element array", function() {
    assert.deepEqual(filter(isEven,[2]),[2]);
    assert.deepEqual(filter(isEven,[13]),[]);
    assert.deepEqual(filter(isOdd,[13]),[13]);
    assert.deepEqual(filter(isOdd,[2]),[]);
  });

  it("testing with multiple elements array", function() {
    assert.deepEqual(filter(isEven,[1,2,3]),[2]);
    assert.deepEqual(filter(isOdd,[1,2,3]),[1,3]);
  });

  it("testing with empty array and array contain only zero", function() {
    assert.deepEqual(filter(isOdd,[]),[]);
    assert.deepEqual(filter(isOdd,[0]),[]);
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isEven,[0]),[0]);
  });
});
