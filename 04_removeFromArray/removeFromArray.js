const removeFromArray = function(arr, ...args) {

    let myArray = arr;
    let myArgs = args;
    let newArr = [];


        for (let i = 0; i < myArray.length; i++) {
            newArr.push(myArray[i]);
            for (let j = 0; j < myArgs.length; j++){
                if (myArray[i] === myArgs[j]){
                    newArr.pop(myArray[i]);
                    continue;
                } else {
                    continue;
                }
            }
        }
        return newArr;
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
