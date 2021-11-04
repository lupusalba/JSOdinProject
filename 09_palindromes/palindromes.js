const palindromes = function (str) {
    let answer;
    let original = str.toLowerCase().replace(/[^a-zA-Z]+/g, '').split("");
    let arr = original.reverse();

    if(original.toString() === arr.reverse().toString()) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
};
// Do not edit below this line
module.exports = palindromes;
