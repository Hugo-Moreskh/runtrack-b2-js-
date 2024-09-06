function myArraySum(array) {
  let arraySum = [1, 2, 3, 4];
  let sum = 0;

  for (let i = 0; i < arraySum.length; i++) {
    sum += arraySum[i];
  }
  console.log(sum);
}

myArraySum();
