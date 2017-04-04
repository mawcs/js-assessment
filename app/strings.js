exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
	reduceString: function (str, amount) {
		let retval = [];
		let curchar = 0;
		let curcount = 0;
		for (let i=0;i<str.length;i++){
			let _c = str.charAt(i);
			if (_c === curchar){
				curcount++;
				if (curcount < amount){
					retval.push(curchar);
				}
			}
			else{
				curchar = _c;
				curcount = 0;
				retval.push(curchar);
			}
		}
		return retval.join("");
	},

	wordWrap: function (str, cols) {
		let retval = [];
		let _split = str.split(" ");

		let i=0;
		let _line = "";

		while (i<_split.length){
			_line = "";
			_line += _split[i++];
			while (_line.length < cols && i<_split.length-1){
				_line += " ";
				if (_line.length >= cols) break;
				if ((_line + _split[i]).length > cols){
					break;
				}
				_line += _split[i++];
			}
			_line = _line.trim();
			_line += "\n";
			retval.push(_line);
		}

		return retval.join("").trim();
	},

	reverseString: function (str) {
		let _a = str.split("");
		_a = _a.reverse();
		return _a.join("");
	}
};
