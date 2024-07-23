const palindromes = function (string) {
    const regex = /[a-z0-9]/g;
    const cleanReversedString = string.toLowerCase().match(regex).reverse().join("");
    const cleanInputString = string.toLowerCase().match(regex).join("");
    return cleanInputString === cleanReversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
