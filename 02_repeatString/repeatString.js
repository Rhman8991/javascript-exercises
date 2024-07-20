

const repeatString = function(string, num) {
    let repeatedString = [];
    if (num < 0) {
        return 'ERROR'
    } else {
        for (let i = 0; i < num; i ++) {
            repeatedString.push(string)
        }
        return repeatedString.join('')
    }
};

// Do not edit below this line
module.exports = repeatString;
