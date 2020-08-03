// Your code here
const mapToNegativize = function(arr) {
  let toReturn = [];
  for( element of arr ) {
    toReturn.push(element * -1);
  }
  return toReturn;
}
