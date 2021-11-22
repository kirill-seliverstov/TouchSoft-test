function filterStrings(arr, length) {
    for(let x = 0; x < arr.length; x++) {
        if(arr[x].length > length) {
            arr.splice(x, 1);
        }
    }
    return arr;
}

console.log(filterStrings(['I love JS', 'some very long string', 'hell'], 9));
console.log(filterStrings(['a', 'ab', 'abc'], 2));