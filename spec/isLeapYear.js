// define a leap year function
var isLeapYear = (year) => {
	
    if(0 === year % 400 || (0 === % 4 && 0 !== year % 100 )){
    	return true;	
    }
    return false;
};    

// export isLeapYear for use in other contracts
module.exports = isLeapYear;