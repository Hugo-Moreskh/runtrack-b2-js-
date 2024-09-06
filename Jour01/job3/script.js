
function myStrLength(str) {
  length = 0;
  while (str[length]) {
    length++;
  }
  return length;
}

let haystack = 'La Plateforme';
let needle = 'a';
myStrLength(haystack);

function myIsInString(haystack, needle) {
  let length = myStrLength(haystack);
  let count = 0;
  for (i = 0; i < length; i++) {
    if (haystack[i] === needle) {
      count++;
    }
  }
  return count;
}
let result = myCountChar(haystack, needle);
console.log(result);

