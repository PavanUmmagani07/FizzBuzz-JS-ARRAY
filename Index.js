#FIZZBUZZ USING IF-ELSE STATEMENTS
var outputArray = [];
 var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    outputArray.push("FizzBuzz");
  } else if (count % 3 === 0) {
    outputArray.push("Fizz");
  } else if (count % 5 === 0) {
    outputArray.push("Buzz");
  } else {
    outputArray.push(count);
  }
  count++;
  console.log(outputArray);
}
fizzBuzz();

*we need to call the function everytime till the end number we want*



#FIZZBUZZ USING WHILE LOOP
var output = [];
var count = 1;

function fizzbuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count = count + 1;
  }
  console.log(output);
}

fizzbuzz();


#FIZZBUZZ USING FOR LOOP
var output = [];
function fizzbuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
fizzbuzz();
