exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
	argsAsArray: function (fn, arr) {
		return fn(arr[0], arr[1], arr[2]);
	},

	speak: function (fn, obj) {
		return fn.apply(obj, null);
	},

	functionFunction: function (str) {
		return (place) => {return str + ", " + place};
	},

	makeClosures: function (arr, fn) {
		let retval = [];

		let _fn = (val) => {
			return () => {return fn(val)};
		};

		for (let i=0;i<arr.length;i++){
			retval.push(_fn(arr[i]));
		}

		return retval;
	},

	partial: function (fn, str1, str2) {
		return (part) => {
			return fn.apply(null, [str1, str2, part]);
		};
	},

	useArguments: function () {
		let retval = 0;
		for (let i=0;i<arguments.length;i++){
			if (!isNaN(arguments[i])){
				retval += arguments[i];
			}
		}
		return retval;
	},

	callIt: function (fn) {
		let args = Array.from(arguments).slice(1,arguments.length);
		return fn.apply(null, args);
	},

	partialUsingArguments: function (fn) {
		let args = Array.from(arguments).slice(1,arguments.length);

		return function (){
			let completeargs = args.concat(Array.from(arguments));
			return fn.apply(null, completeargs);
		};
	},

	curryIt: function (fn) {
		let currier = function(next, total){
			return (current)=>{
				if (next.push(current) < total){
					return currier(next, total);
				}
				else{
					return fn.apply(null, next);
				}
			}
		};
		return currier([], fn.length);
	}
};
