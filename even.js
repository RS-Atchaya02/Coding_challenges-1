function even(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if (i % 2 === 0) {
            count += 1;
        }
    }
    return count;
}

let arr = [56,89,4,5,22,10];
console.log(even(arr));  //OUTPUT :3
