exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
	fizzBuzz: function (num) {
		// write a function that receives a number as its argument;
		// if the number is divisible by 3, the function should return 'fizz';
		// if the number is divisible by 5, the function should return 'buzz';
		// if the number is divisible by 3 and 5, the function should return
		// 'fizzbuzz';
		//
		// otherwise the function should return the number, or false if no number
		// was provided or the value provided is not a number
		const _d1 = 3;
		const _d2 = 5;

		if (num % _d1 === 0 && num % _d2 === 0) {
			return "fizzbuzz";
		}
		else if (num % _d1 === 0) {
			return "fizz";
		}
		else if (num % _d2 === 0) {
			return "buzz";
		}
		else if (isNaN(num)) {
			return false;
		}
		else {
			return num;
		}

	}
};
