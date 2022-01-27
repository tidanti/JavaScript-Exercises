const repeatString = function(str, numberOfRepeats) {
    let newStr = '';
    if (numberOfRepeats < 0) {
        newStr = 'ERROR';
    }

    for (let i = 0; i < numberOfRepeats; i++) {
        newStr += str;
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
