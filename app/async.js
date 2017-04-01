exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function (value) {
		return new Promise((res,rej)=>{
			res(value);
		});
	},

	manipulateRemoteData: function (url) {
		return new Promise((res,rej)=>{
			let _c = require(url);
			if (!_c){
				rej("Could not load " + url);
			}
			else{
				res(JSON.parse(_c));
			}
		});
	}
};
