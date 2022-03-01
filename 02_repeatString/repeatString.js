const repeatString = function(str, n) {
    let res = ''
    if(str !== '') {
        if(n === -1) {
            str = 'ERROR';
            return str
        } else if(n === 0) {
            str = '';
            return str
        } else {
            for(let i = 1; i <= n; i++) {
                res = res.concat(str)
            }
            return res
        }
    } else {
        return str;
    }
};

// Do not edit below this line
module.exports = repeatString;
