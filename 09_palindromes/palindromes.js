const palindromes = function (str) {
    str = str.toLowerCase;
    const charArray = str.split();
    const filteredCharArray = charArray.filter(currChar => currChar !== ',' && currChar !== ' ');
    const reversedArray = filteredCharArray.reverse();
    
    const filteredOriginStr = filteredCharArray.join('');
    const reversedStr = reversedArray.join('');

    return filteredOriginStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
