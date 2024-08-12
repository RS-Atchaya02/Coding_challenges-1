function Occurrences(arr, element) {
    let count = 0;
    let index = 0;

    while (index < arr.length) {
        if (arr[index] === element) {
            count += 1;
        }
        index += 1;
    }

    return count;
}

let arr = [22,6,4,3,22,5,6,1];
let element = 6;
console.log(Occurrences(arr, element));  // Output: 2
