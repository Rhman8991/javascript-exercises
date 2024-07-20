const removeFromArray = function(array, ...args) {
    const arr = [...array]
    for (let el of args) {
        let index = arr.indexOf(el)
        while (index !== -1) {
            arr.splice(index, 1)
            index = arr.indexOf(el)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
