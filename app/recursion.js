exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
	listFiles: function (data, dirName) {
		let retval = [];
		if ((dirName === null || typeof dirName === "undefined")) dirName = "";

		function getFiles(da, dn, p){
			let files = da["files"];
			let dir = da["dir"];
			let parent = p;

			if (files !== null){
				for (let i=0;i<files.length;i++){
					let file = files[i];
					if (typeof file === "string"){
						if ((dn === "") || (dn === dir) || parent){
							retval.push(file);
							parent = true;
						}
						else{
							parent = false;
						}
					}
					else{
						getFiles(file, dn, parent);
					}
				}
			}
		}

		getFiles(data, dirName, false);
		return retval;
	},

	permute: function (arr) {
		let retval = [];

		function swapEnds(a) {
			let _r = Array.from(a);
			let _m = _r[_r.length-1];
			_r[_r.length-1] = _r[_r.length-2];
			_r[_r.length-2] = _m;
			return _r;
		}

		function rotate(a){
			let _r = Array.from(a);
			let _m = _r.shift();
			_r.push(_m);
			return _r;
		}

		function getScrambled(a, rotSize){
			retval.push(a);
			retval.push(swapEnds(a));
			let _rot = rotSize+2;

			if (_rot <= a.length){
				let _subFront = a.slice(0, a.length - _rot);
				let _subEnd = a.slice(a.length - _rot, a.length);
				_subEnd = rotate(_subEnd);
				a = _subFront.concat(_subEnd);
				getScrambled(a, rotSize+1);
			}
		}

		getScrambled(arr, 1);

		return retval;
	},

	fibonacci: function (n) {

		function fib(nth, currFib=1, oldFib=0){
			if (nth === 0) return oldFib;
			if (nth === 1) return currFib;
			return fib(nth-1, currFib+oldFib, currFib);
		}

		return fib(n);
	},

	validParentheses: function (n) {

	}
};
