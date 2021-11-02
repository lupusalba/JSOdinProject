const reverseString = function(str) {
    let arr = str.split("");
    let temp = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }

    return temp.join("");

};

// Do not edit below this line
module.exports = reverseString;
