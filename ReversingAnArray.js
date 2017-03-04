// Arrays have a method reverse, which changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the reverse method does: it modifies the array
// given as argument in order to reverse its elements. Neither may use the standard
// reverse method.

function reverseArray(array){
  newArray = []
  while (array.length > 0){
    newArray.push(array.pop())
  }
  return newArray
}

function reverseArrayInPlace(array){
  newArray = []
  var len = array.length
  for (var i = 0; i < len; i++)
    newArray.push(array.pop());
  for (var i = 0; i < len; i++)
    array.unshift(newArray.pop());
  return array
}
