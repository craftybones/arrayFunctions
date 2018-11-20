const assert = require('assert');
const filter = require('../functionLib').filter;

const isEven = function(number) {
  return number % 2 == 0;
}

const filterTestWithIsEven = function(){
  assert.deepEqual(filter(isEven,[1,2,3]),[2]);
  assert.deepEqual(filter(isEven,[]),[]);
  assert.deepEqual(filter(isEven,[0]),[0]);
  assert.deepEqual(filter(isEven,[13]),[]);
  assert.deepEqual(filter(isEven,[2]),[2]);
  console.log("all filterTestWithIsEven is passed");
}

filterTestWithIsEven();

