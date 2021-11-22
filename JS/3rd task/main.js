function filterStrings(arr, length) {
    var i = 0;
    while (i < arr.length) {
    if (arr[i].length > length) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

console.log(filterStrings(['a', 'ab', 'abc'], 2));