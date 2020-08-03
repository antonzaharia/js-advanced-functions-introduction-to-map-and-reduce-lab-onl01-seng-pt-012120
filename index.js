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
const reduceToTotal = function(arr, base=0){
  for( let element of arr ){
    base += element;
  }
  return base;
}
const reduceToAllTrue = function(arr) {
  for( let element of arr ){
    switch (element) {
      case 'light':
        food = 'grapes';
        break;
      case 'moderate':
        food = 'sushi';
        break;
      case 'famished':
        food = 'lasagna';
        break;
    }
  }
}