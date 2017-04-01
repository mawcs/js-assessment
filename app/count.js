exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {

	count: function (start, end) {
		let _self = this;
		let iid;

		function doCount() {
			console.log(start++);

			if (start <= end) {
				iid = setTimeout(doCount, 100);
			}
		}

		doCount();

		return {
			cancel: function () {
				iid && clearTimeout(iid);
			}
		};
	}

};
