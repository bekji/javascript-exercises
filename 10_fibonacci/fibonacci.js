const fibonacci = function(idx) {
    const index = Number(idx);
    if(index < 0) {
        return 'OOPS'
    }
    if(index === 0) {
        return 0
    }
    const fib = [1, 1];
    for(let i = 2; i <= index; i++){
        fib.push(fib[i-2] + fib[i-1]);
    }
    return fib[index-1]
};

// Do not edit below this line
module.exports = fibonacci;
