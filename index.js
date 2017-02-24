// define a leap year function
var isLeapYear = (year) => {
	
	// check to see that year is numeric
	if (isNan(year)) {
	    throw new Error("Error: Input must be numeric.");
    }
    
    //check to see that the year is an interger
    if (!Number.isInteger(year)) {
    	throw new Error("Error: Input must be an integer value. ")
    }

    return (0 === year % 400 || (0 === year % 4 && 0 !== year % 100 ))	
};   
// export isLeapYear for use in other contracts
module.exports = isLeapYear;