function rmEl(arr, val){
    let j = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] !== val){
            arr[j] = arr[i];
            j++;
        }
    }
    return j
}


function rmElBrute(arr, val){
    let i = 0;
    while(i < arr.length){
        if(arr[i] === val){
            arr.splice(i, 1);
        }else{
            i++;
        }
    }
    console.log(arr);
}

let arr = [1, 2, 3, 4, 5, 2, 3, 4];
rmElBrute(arr,2);