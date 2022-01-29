const sumAll = function(min, max) {
    if (typeof min !== 'number' ||
        typeof max !== 'number') {
            return 'ERROR';
    }

    if (min < 0 || max < 0) return 'ERROR';

    if (min > max) {
        let tmp = min;
        min = max;
        max = tmp;
    }

    let sumAll = 0;
    for (let i = min; i <= max; i++) {
        sumAll += i;
    }

    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
