function multiple(a, b) {
  console.log(a * b);
}
multiple(2, 3);
// or we can use return
function multiple(a, b) {
  return a * b;
}
console.log(2, 3);

// 2:
let storeValue = function (a, b) {
  return a * b;
};
console.log(storeValue(5, 2));
// 3:
const arrroValue = () => {}; // arrow function structure
//
let arrowValues = (a, b) => {
  return a * b;
};
console.log(arrowValues(3, 3));
// 4:
function multiple(a, b) {
  console.log(a % b);
}
multiple(9, 5);
//-----------------------//
let storeValue4 = function (a, b) {
  console.log(a % b);
};
storeValue4(8, 5);
//-----------------------//
let arrowValues4 = (a, b) => a % b;
console.log(arrowValues4(5, 3));
//-----------------------//
