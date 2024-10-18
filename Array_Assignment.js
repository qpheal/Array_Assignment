//Part 1
let fruits = ["apple", "banana", "mango", "orange", "grape"];

//Printing 2nd element in the fruit array
console.log(fruits[1]); //banana

//Printing 4th element in the fruit array
console.log(fruits[3]); // orange

//Replacing mango with strawberry
fruits[2] = "strawberry";
console.log(fruits);
//[ 'apple', 'banana', 'strawberry', 'orange', 'grape' ]

// Add/Remove
//Adding watermelon to the end
fruits.push("watermelon");
console.log(fruits);

// Remove the first element
fruits.shift();
console.log(fruits);

//Part2
// Using For Loop to print elements in fruits
for (item in fruits) {
  console.log(fruits[item]);
}

// Using The ForEach method
fruits.forEach((fruit, index) => {
  console.log(`Element ${index}: ${fruit}`); //Element 0: banana  Element 1: strawberry Element 2: orange Element 3: grape Element 4: watermelon
});

// Using the map method
let fruitLengths = fruits.map((fruit) => {
  return fruit.length;
});
console.log(fruitLengths); //[ 6, 10, 6, 5, 10 ]

// Part3
// Using the filter method to create an array with strings > 5 characters
let longFruits = fruits.filter((fruit) => {
  return fruit.length > 5;
});
console.log(longFruits); //[ 'banana', 'strawberry', 'orange', 'watermelon' ]

// Sorting Arrays Alphabetically
fruits.sort();
console.log(fruits); // [ 'banana', 'grape', 'orange', 'strawberry', 'watermelon' ]

// Reversing Sorted Arrays
fruits.reverse();
console.log(fruits); // [ 'watermelon', 'strawberry', 'orange', 'grape', 'banana' ]

// Using the reduce method to reduce items to one string
const reducedFruitName = fruits.reduce((previous, current) => {
  return previous.concat(current);
}, "");

console.log(reducedFruitName); // watermelonstrawberryorangegrapebanana

// Part 4
// Creating a 2D Array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix) {
  const rowString = row.join(" ");
  console.log(rowString);
}

// 1 2 3
// 4 5 6
// 7 8 9

// Printing out the element in the 2 row 3 column
console.log(matrix[1][2]); // 6

// USing the flat method to reduce the 2D matrix to a single array
const flat = matrix.flat();
console.log(flat); //[ 1, 2, 3, 4, 5,  6, 7, 8, 9 ]

// Part 5
// Removing duplicates
const mixedFruits = ["apple", "banana", "orange", "apple", "banana"];
const mixedFruitsWithoutDuplication = [...new Set(mixedFruits)];

console.log(mixedFruitsWithoutDuplication); // [ 'apple', 'banana', 'orange' ]

const numbers = [15, 24, 6, 89, 32];
let max = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

//Bonus Task
function chunkArray(arr, chunkSize) {
  let results = [];
  while (arr.length) {
    results.push(arr.slice(0, chunkSize));
    arr = arr.slice(chunkSize);
  }
  console.log(results);
}

chunkArray(fruits, 2);
