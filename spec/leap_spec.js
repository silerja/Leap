// import the code to the test
var isLeapYear = require("../index");

describe("A program to determine if a year is a leap year"),()=>{

    it("define a function called isLeapYear", () => {

        expect(isLeapYear).toBeDeffined();
        expect(typeof isLeapYear).toBe("function");

    });

    it("can determine if a year is divisible by 4", () => {

        // the years were chosen by random with a couple from
        // each centrury; referene Gregorian calander
	    expect(isLeapYear(1817).tobe(false);
	    expect(isLeapYear(1816).tobe(true);
	    expect(isLeapYear(1927).tobe(false);
	    expect(isLeapYear(1928).tobe(true);
	    expect(isLeapYear(2034).tobe(false);
	    expect(isLeapYear(2040).tobe(true);
	    expect(isLeapYear(2154).tobe(false);
	    expect(isLeapYear(2160).tobe(true);
    });

    it("returns false for years divisible by 100", () => {
        //years chosen by random fitting example
        expect(isLeapYear(1800).tobe(false);

    });
});