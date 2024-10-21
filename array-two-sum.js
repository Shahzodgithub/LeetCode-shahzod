function twoSum(nums, target) {
    if(nums.length == 0) return []
    let obj = {}
    for(let i=0; i<=nums.length; i++){
        let diff = target - nums[i]
        if(obj.hasOwnProperty(diff)){
            return [obj[diff], i]
        }
        obj[nums[i]] = i
    }
    return []
};

function twoSumRefactored(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

function twoSumBruteForce(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]