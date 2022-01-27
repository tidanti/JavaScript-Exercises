const reverseString = function(str) {
    let strSplittedArr = str.split('');
    strSplittedArr = strSplittedArr.reverse();
    let newStr = strSplittedArr.join('');

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
