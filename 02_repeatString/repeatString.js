const repeatString = function(string, num) {
    let result = string;

    if (num < 0 ){  return 'ERROR'  }
    else if(num === 0){ return '';  }
    else if (num === 1){  return string;  } 
    else if (num > 1){
        for (var i = 1; i <num; i++) {
            result += string;
        };
    }
    return result;
};


// Do not edit below this line
module.exports = repeatString;
