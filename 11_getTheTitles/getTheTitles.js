const getTheTitles = function(inArr) {
    let outArr = [];
    for(let i = 0; i < inArr.length; i++) {
        outArr[i] = inArr[i].title;
    }


    return outArr;
};

// Do not edit below this line
module.exports = getTheTitles;
