function OddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { 
            sum += arr[i];
        }
    }
    return sum;
}
let arr = [41,6,69,12,8];
console.log(OddNumbers(arr));  // Output: 110
