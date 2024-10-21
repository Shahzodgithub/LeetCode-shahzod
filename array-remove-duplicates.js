//OPTIMAL APPROACH
function remove(arr){
    if(arr.length == 0) return 0;
    let j = 0;


    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }
    console.log(arr)
    return j+1;
}


//Brute force approach
function remove_brute(arr){
    let unique = new Set(arr);
    let i = 0;
    for(let val of unique){
        arr[i] = val;
        i++;
    }
    console.log(arr);
    return i
}

// for loop approach
function remove_loop(arr){
    let unique = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    for (let j = 0; j < unique.length; j++) {
        arr[j] = unique[j];
    }
    return unique.length
}

let arr = [0,0,1,1,1,2,2,3,3,4];
console.log(remove_loop(arr));