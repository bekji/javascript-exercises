const reverseString = function(word) {
    let splitWord = word.split("");
    let reversed = splitWord.reverse();
    let reverseJoint = reversed.join("");
    return reverseJoint;
};

// Do not edit below this line
module.exports = reverseString;
