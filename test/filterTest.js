const assert = require('assert');
const filter = require('../functionLib').filter;

const isEven = function(number) {
  return number % 2 == 0;
}

const isOdd = function(number) {
  return !isEven(number);
}

const filterTestWithIsEven = function(){
  assert.deepEqual(filter(isEven,[1,2,3]),[2]);
  assert.deepEqual(filter(isEven,[]),[]);
  assert.deepEqual(filter(isEven,[0]),[0]);
  assert.deepEqual(filter(isEven,[13]),[]);
  assert.deepEqual(filter(isEven,[2]),[2]);
  console.log("all filterTestWithIsEven is passed");
}

const filterTestWithIsOdd = function(){
  assert.deepEqual(filter(isOdd,[1,2,3]),[1,3]);
  assert.deepEqual(filter(isOdd,[]),[]);
  assert.deepEqual(filter(isOdd,[0]),[]);
  assert.deepEqual(filter(isOdd,[13]),[13]);
  assert.deepEqual(filter(isOdd,[2]),[]);
  console.log("all filterTestWithIsOdd is passed");
}

filterTestWithIsEven();
filterTestWithIsOdd();
