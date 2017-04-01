exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
	valueAtBit: function (num, bit) {
		let mask = 1 << (bit-1);
		return (num & mask)?1:0;

	},

	base10: function (str) {
		return parseInt(str, 2);
	},

	convertToBinary: function (num) {
		let n = Number(num).toString(2);
		return "00000000".substr(n.length)+n;
	},

	multiply: function (a, b) {

		function decimalPlaces(number) {
			if(Math.floor(number.valueOf()) === number.valueOf()) return 0;
			return number.toString().split(".")[1].length || 0;
		}

		let adec = decimalPlaces(a);
		let bdec = decimalPlaces(b);
		let dec = Math.max(adec, bdec);

		return parseFloat((a * b).toFixed(dec));
	}
};
