exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
	alterContext: function (fn, obj) {
		return fn.call(obj);
	},

	alterObjects: function (constructor, greeting) {
		constructor.prototype.greeting = greeting;
	},

	iterate: function (obj) {
		let retval = [];
		for (x in obj){
			if (obj.hasOwnProperty(x)){
				retval.push(x + ": " + obj[x]);
			}
		}
		return retval;
	}
};
