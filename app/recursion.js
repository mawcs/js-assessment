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
		let topIndex = 3;
		let workingA = Array.from(arr);

		function swapEm(a,y,z){
			let _r = Array.from(a);
			let _z = a[z];
			_r[z] = a[y];
			_r[y] = _z;
			return _r;
		}

		function doubleSwapEm(a){
			let ti = topIndex;
			let bounce = 1;
			retval.push(swapEm(a,ti,ti-bounce));
			ti--;
			a = swapEm(a,ti,ti-bounce);
			retval.push(a);

			return a;
		}

		function rotateEm(a){
			let _r = Array.from(a);
			_r.push(_r.shift());
			return _r;
		}

		for (let i=0;i<workingA.length;i++){
			workingA = Array.from(doubleSwapEm(workingA));
			workingA = Array.from(doubleSwapEm(workingA));
			let tmp = workingA.shift();
			workingA = Array.from(workingA.reverse());
			workingA.unshift(tmp);
			retval.push(Array.from(workingA));
			retval.push(Array.from(swapEm(workingA,3,2)));
			workingA = arr = rotateEm(Array.from(arr));
		}

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
