// Your code here
const mapToNegativize = function(arr) {
  let toReturn = [];
  for( let element of arr ) {
    toReturn.push(element * -1);
  }
  return toReturn;
}
const mapToNoChange = function(arr) {
  let toReturn = [];
  for(let element of arr ) {
    toReturn.push(element)
  }
  return toReturn;
}
const mapToDouble = function(arr) {
  let toReturn = [];
  for( let element of arr ) {
    toReturn.push(element * 2);
  }
  return toReturn;
}
const mapToSquare = function(arr) {
  let toReturn = [];
  for( let element of arr ) {
    toReturn.push(element ** 2);
  }
  return toReturn;
}
