// Write a function arrayToList that builds up a data structure like the previous
// one when given [1, 2, 3] as argument, and write a listToArray function that
// produces an array from a list. Also write the helper functions prepend,
// which takes an element and a list and creates a new list that adds the element
// to the front of the input list, and nth, which takes a list and a number and
// returns the element at the given position in the list, or undefined when there
// is no such element.
//
// If you haven’t already, also write a recursive version of nth.

function arrayToList(array){
  var len = array.length
  var list = null
  for (var i = 0; i < len; i++)
   list = {value: array.pop(), rest: list};
  return list
}

function listToArray(list){
  var array = []
  for (var node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array
}

function prepend(elem, list){
	list = {value: elem, rest: list}
    return list
}

function nth(list, num) {
  if (!list)
    return undefined;
  else if (num == 0)
    return list.value;
  else
    return nth(list.rest, num - 1);
}
