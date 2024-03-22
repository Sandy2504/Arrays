/////////TODO: Implement the removeItem function/////////////////////

function removeItem(array, index) {
  if (index < 0 || index >= array.length) {
    return array;
  }

  return array.slice(0, index).concat(array.slice(index + 1));
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 0));
console.log(animals);

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 2));
console.log(fruits);

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sum += arr[i].length;
    }
  }

  return sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
