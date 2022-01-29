const removeFromArray = function(arr, ...elemsToDelete) {
    const newArr = arr.filter((elem) => {
        return !(elemsToDelete.includes(elem));
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
