function multiple(a, b) {
  console.log(a * b);
}
multiple(2, 3);
// 2:
let storeValue = function (a, b) {
  return a * b;
};
console.log(storeValue(5, 2));
// 3:
let arrowValues = (a, b) => a * b;
console.log(arrowValues(3, 3));
// 4:
function multiple(a, b) {
  console.log(a / b);
}
multiple(2, 3);
//-----------------------//
let storeValue4 = function (a, b) {
  return a / b;
};
console.log(storeValue4(5, 2));
//-----------------------//
let arrowValues4 = (a, b) => a / b;
console.log(arrowValues4(6, 3));
