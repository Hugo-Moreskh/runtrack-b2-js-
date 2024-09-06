function mySquareArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);

  }
  return result;
}
let tableau = [3, 8, 4, 2, 5];
let tableauCarre = mySquareArray(tableau);
console.log(tableauCarre);
