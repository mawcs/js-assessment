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
		let result = [];
		let working = [];

		function doPerm() {
			let val = {};
			let l = arr.length;

			for (let i=0; i<l; i++) {
				val = arr.splice(i, 1)[0];
				working.push(val);

				if (arr.length > 0) {
					doPerm();
				} else {
					result.push(Array.from(working));
				}

				arr.splice(i, 0, val);
				working.pop();
			}

			return result;
		}

		return doPerm();
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
