//PROBLEM  Write two conversion routines. 
//The first routine converts a string to a signed integer.
//The second routine conversts a signed integer stored as an int back to a string.

var strToInt = function (str) {
  var resultInt = 0;
  if (str.charAt(0) == '-') {
    var e = 1; // digit multiplier
    for (var i = str.length-1; i >= 1; i--) {
      resultInt = resultInt - (str.charAt(i) - '0')*e;
      e = e*10;
    };
  }
  else {
    var e = 1;
    for (var i = str.length-1; i >= 0; i--) {
      resultInt = resultInt + (str.charAt(i) - '0')*e;
      e = e*10;
    };
  };
  return resultInt;
};

var intToStr = function (number) {
  var numArray = [];
  var numString = '';
  var num = number; // this is to negate the integer when it's negative
  if (num < 0) {
    numString = '-';
    num = -(num);
  };
  var i = 0; // counter for while loop
  while (num !== 0) {
    numArray[i] = num % 10;
    num = (num - numArray[i])/10; //Inserting the last digit into the array one by one
    i++;
  };
  for (var i = numArray.length-1; i >=0; i--) {
    numString = numString +(numArray[i] + '');
  };
  return numString;
};

console.log(strToInt('-00123'));

console.log(strToInt('123'));

console.log(intToStr(123));

console.log(intToStr(-123));
