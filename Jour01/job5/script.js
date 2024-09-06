function myPrimeList(limit) {
  let isPrime = [];
  for (i = 2; i <= limit; i++) {
    let isTrue = true;
    for (let D = 2; D < i; D++) {
      if (i % D === 0) {
        isTrue = false;
      }
    }

    if (isTrue) {
      isPrime.push(i)
    }
  }
  return isPrime;
}
console.log(myPrimeList(18));


