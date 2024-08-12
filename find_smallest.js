function minimum (arr)
{
    let i;
    let min = arr[0 ];
    for (i = 1; i < arr.length; i++)
    {
        if(arr[i] < min)
        min = arr[i]
    }
    return min
}
let arr = [6,78,45,20];
console.log(minimum(arr));
