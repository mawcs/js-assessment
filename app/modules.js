exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
	createModule: function (str1, str2) {

		let mod = function(g,n){
			this.name = n;
			this.greeting = g;
			this.sayIt = function () {
				return this.greeting + ", " + this.name;
			}
		};

		return new mod(str1, str2);
	}
};
