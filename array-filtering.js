// define numbers array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter numbers for even numbers
var filtered = numbers.filter(function evenNumbers (number) {
  return number % 2 === 0;
});
// print filtered array to console
console.log(filtered);
