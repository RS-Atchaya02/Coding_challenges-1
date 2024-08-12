function larger(arr)
{ 
    let i;  
    let max=arr[0];
    for(i=1;i<arr.length;i++)
    {
        if(arr[i] > max )
        {
            max=arr[i] 
        }
    }
    return max;
    }
    let arr=[5,6,7,8]
    console.log(larger(arr));
