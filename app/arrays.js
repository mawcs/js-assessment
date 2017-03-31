exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	indexOf: function (arr, item) {
		if (arr === null || typeof arr === "undefined"){
			return -1;
		}
		if (Array.prototype.indexOf){
			return arr.indexOf(item);
		}
		else{
			for(let i=0;i<arr.length;i++){
				if (arr[i] === item){
					return i;
				}
			}
		}
		return -1;
	},

	sum: function (arr) {
		if (arr === null || typeof arr === "undefined"){
			return -1;
		}

		let sum = 0;

		for(let i=0;i<arr.length;i++){
			sum += arr[i];
		}
		return sum;
	},

	remove: function (arr, item) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		let newarray = [];

		for(let i=0;i<arr.length;i++){
			if (arr[i] !== item){
				newarray.push(arr[i]);
			}
		}

		return newarray;
	},

	removeWithoutCopy: function (arr, item) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		for(let i=arr.length;i>=0;i--){
			if (arr[i] === item){
				arr.splice(i, 1);
			}
		}

		return arr;
	},

	append: function (arr, item) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		arr.push(item);
		return arr;
	},

	truncate: function (arr) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		arr.pop();
		return arr;
	},

	prepend: function (arr, item) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		arr.splice(0, 0, item);

		return arr;
	},

	curtail: function (arr) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		arr.splice(0, 1);

		return arr;
	},

	concat: function (arr1, arr2) {
		if (arr1 === null || typeof arr1 === "undefined" || arr2 === null || typeof arr2 === "undefined"){
			return -1;
		}
		if (Array.prototype.concat){
			return arr1.concat(arr2);
		}
		else{
			for(let i=0;i<arr2.length;i++){
				arr1.push(arr2);
			}
		}
		return arr1;
	},

	insert: function (arr, item, index) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		arr.splice(index, 0, item);

		return arr;
	},

	count: function (arr, item) {
		if (arr === null || typeof arr === "undefined"){
			return;
		}

		let count = arr.reduce((acc, val)=>{
			if (val === item){
				acc++;
			}
			return acc;
		});

		return count -1;
	},

	duplicates: function (arr) {
		if (arr === null || typeof arr === "undefined"){
			return [];
		}

		let dups = [];

		for (let i=0;i<arr.length;i++){
			if (arr.lastIndexOf(arr[i]) !== i && !dups.includes(arr[i])){
				dups.push(arr[i]);
			}
		}

		return dups;
	},

	square: function (arr) {
		if (arr === null || typeof arr === "undefined"){
			return [];
		}

		for (let i=0;i<arr.length;i++){
			arr[i] = arr[i] * arr[i];
		}
		return arr;
	},

	findAllOccurrences: function (arr, target) {
		if (arr === null || typeof arr === "undefined"){
			return [];
		}

		let occurances = [];

		let marker = arr.indexOf(target);
		while (marker != -1){
			occurances.push(marker);
			marker = arr.indexOf(target, marker+1);
		}

		return occurances;
	}
};
