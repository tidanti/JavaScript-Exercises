const palindromes = function (str) {
    str = str.toLowerCase();
    const charArray = str.split('');
    const filteredCharArray = charArray.filter(currChar => {
        return currChar <= 'z' && currChar >= 'A';
    });
    
    const filteredOriginStr = filteredCharArray.join('');
    const reversedStr = filteredCharArray.reverse().join('');

    return filteredOriginStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
