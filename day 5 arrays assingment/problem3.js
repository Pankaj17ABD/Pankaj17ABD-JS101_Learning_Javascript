//Given an array of numbers find the average of all the even numbers.

let num = [2, 3, 4, 5, 6, 8, 9,];
let count = 0;
let sum = 0;
for (let a = 0; a <= 10; a++) {
  if (num[a] % 2 == 0) {
    sum = sum + num[a]
    count++;

  }
}
console.log(sum / count);