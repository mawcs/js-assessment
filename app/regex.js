exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
	containsNumber: function (str) {
		return /\d+/.test(str);
	},

	containsRepeatingLetter: function (str) {
		return /(\D)\1{1,}/.test(str);
	},

	endsWithVowel: function (str) {
		return /^.*[aeiouAEIOU]$/.test(str);
	},

	captureThreeNumbers: function (str) {
		let reg = /(\d{3})/;
		let _m = str.match(reg);
		if (_m && _m.length > 0){
			return _m[0];
		}
		return false;
	},

	matchesPattern: function (str) {
		return /^\d{3}-\d{3}-\d{4}$/.test(str);
	},

	isUSD: function (str) {
		return /^[\$]{1}[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/.test(str);
	}
};
