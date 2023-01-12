let a = 2;
let b = 3;
let c = 4;

if (a > b && a > c) {
  console.log("a is greater");
}
else if (b > c && b > a) {
  console.log("b is greater");
}
else if (c > b && c > a) {
  console.log("c is greater");
}
else {
  console.log("all are equal");
}