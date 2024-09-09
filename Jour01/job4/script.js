function myArraySum(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

myArraySum([1, 2, 3, 4]);
