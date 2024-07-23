const fibonacci = function(number) {
    number = Number(number);
   if (number < 0) {
    return "OOPS"
   } else if (number === 0) {
    return 0
   }
   let prevNum = 0;
   let currNum = 1; 
   for(let i = 1; i < number; i++) {
    let nextNum = currNum + prevNum;
    prevNum = currNum;
    currNum = nextNum
   }
   return currNum
};

// Do not edit below this line
module.exports = fibonacci;
