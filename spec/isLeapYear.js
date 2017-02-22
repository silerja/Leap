// define a leap year function
var isLeapYear = (year) => {
	// is year divisible by 4
	return (0 === year % 4);
};

// export isLeapYear for use in other contracts
module.exports = isLeapYear;