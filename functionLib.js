const map = function(fnName, source) {
  let result = [];
  for(let index=0; index<source.length; index++) {
    result.push(fnName(source[index]));
  }
  return result;
}

const filter = function(fnName, source) {
  let result = [];
  for (element of source) {
    !fnName(element)||result.push(element);
  }
  return result;
}

const reduce = function(fnName, source, initializer) {
  let sourceCopy = source.slice();
  if(initializer == undefined) {
    initializer = sourceCopy.splice(0,1)[0];
  }
  let result = initializer;
  for(let index=0; index<sourceCopy.length; index++) {
    result = fnName(initializer,sourceCopy[index]);
    initializer = result;
  }
  return result;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
