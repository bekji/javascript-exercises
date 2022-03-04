const sumAll = function(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR'
    } else {
        let res = 0
        if (num1 < num2) {
            for(let i = num1; i <= num2; i++){
                res += i;
            }
            return res;
        } else {
            for(let i = num1; i >= num2; i--){
                res += i;
            }
            return res;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
