//Problem: Implement a routine that prints all possible orderings of the characters in a string.

//Initiation

var permutations = function(str) {
  if (str.length == 0) {return ''};
  var char_array = new Array(str.length);
  for (var i = 0; i < str.length; i++) {
    char_array[i] = str.charAt(i);
  };
  return permute(char_array);
};

var permute = function(arr) {
  var combinations = [];
  if (arr.length == 1) {return arr}; //base case
  for (var i = 0; i < arr.length; i++) {
    var inner_char_array = arr.slice();
    inner_char_array[i] = inner_char_array[inner_char_array.length-1];
    inner_char_array.pop();
    var inner_permu = permute(inner_char_array);
    for (var j = 0; j < inner_permu.length; j++) {
      combinations.push(arr[i]+inner_permu[j]);
    };
  };
  return combinations;
};

console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('aaa'));
console.log(permutations('abcd'));
