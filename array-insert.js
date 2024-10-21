function inst(nums, target){
    for(let i=0; i<=nums.length; i++){
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}

function ansol(nums, target){
    let l= 0;
    let r = nums.length-1;
    while(l<=r){
        let m = Math.floor((l+r)/2);
        if (nums[m] == target) {
            return m;
        }
        if(target >nums[m]){
            l = m+1;
        }else{
            r = m-1;
        }

    }
    return l;
}

let a = [1,3,5,6,8,11]

console.log(ansol(a, 9)) 