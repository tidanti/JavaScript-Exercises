const fibonacci = function(num) {
    num = +num;
    const error = getErrorsOfInputValue(num);
    if (error) return error;

    const fibo = new Fibo(num);
    return fibo.getNumberByIndex(num);
};

function getErrorsOfInputValue(value) {
    if (!value) {
        return 'OOPS';
    }

    if (value <= 0) {
        return 'OOPS';
    }

    return '';
}

function Fibo(num) {
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            this[i] = 1;
            continue;
        } else if (i === 2) {
            this[i] = 1;
            continue;
        }

        this[i] = this[i - 1] + this[i - 2];
    }

    this.getNumberByIndex = choicedNum => this[choicedNum];
}

// Do not edit below this line
module.exports = fibonacci;
