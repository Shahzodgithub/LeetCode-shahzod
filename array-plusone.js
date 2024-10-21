function num(digits){
    return Array.from(String(BigInt(digits.join('')) + 1n), Number);
}

function plusone(digits){
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i]+1 != 10){
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if(i == 0){
            digits.unshift(1);
            return digits;
        }
    }
    return [];
}

console.log(plusone([9,9,8]));
