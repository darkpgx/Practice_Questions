//PROBLEM 1 Implement a function to perform a binary search on a sorted array of integers
//to find the index of a given integer. Compare with other methods.
//first approach with recursion
//second using whileloop

var num_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var binarySearch = function (num_array, target, begin_index, ending_index){
  if(begin_index == ending_index && num_array[begin_index] !== target) { return "Does not exist" };// when target not in array
  var middle_index=0;
  if((ending_index-begin_index)%2 == 1){
    middle_index = (ending_index + begin_index - 1)/2;
  }
  else{ middle_index = (ending_index + begin_index)/2; };
  if(target == num_array[middle_index]) {return middle_index;}
  else if(num_array[middle_index] > target){return binarySearch(num_array, target, begin_index, middle_index-1);}
  else {return binarySearch(num_array, target, middle_index+1, ending_index);};
};

var numSearch = function (num_array, target) {
  var begin_index = 0;
  var ending_index = num_array.length-1;
  console.log (num_array, target, begin_index, ending_index);
  var num = binarySearch(num_array, target, begin_index, ending_index);
  return num;
};

console.log(numSearch(num_array, 4));
console.log(numSearch(num_array, 16));
console.log(numSearch(num_array, -5));
console.log(numSearch(num_array, 21));

//now using whileloop

var whileNumSearch = function(num_array, target) {
  var begin_index = 0;
  var ending_index = num_array.length -1;
  var middle_index;
  do {
    if((ending_index-begin_index)%2 == 1){
      middle_index = (ending_index + begin_index - 1)/2;
    }
    else{ middle_index = (ending_index + begin_index)/2; };
    if(begin_index == ending_index && target !== num_array[middle_index]) {return "Does not exist";};
    if(target == num_array[middle_index]) {return middle_index;}
    else if(target > num_array[middle_index]) {begin_index = middle_index + 1;}
    else {ending_index = middle_index -1;};
  } while(target !== num_array[middle_index]);
};

console.log(whileNumSearch(num_array,4));
console.log(whileNumSearch(num_array,16));
console.log(whileNumSearch(num_array,-5));
console.log(whileNumSearch(num_array,22));
