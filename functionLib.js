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
  let result = initializer;
  for(let index=0; index<source.length; index++) {
    if(initializer == undefined) {
      initializer = source[0];
      index ++;
    }
    result = fnName(initializer,source[index]);
    initializer = result;
  }
  return result;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
