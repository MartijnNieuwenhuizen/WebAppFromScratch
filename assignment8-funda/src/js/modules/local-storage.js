var localStorageMod = {
	set: function(name, data) {

		return new Promise(function(resolve, reject) {

			var stringifiedData = JSON.stringify(data);
			localStorage.setItem(name, stringifiedData);

			resolve();
			reject();

		});

	},

	get: function(localObj) {

		return new Promise(function(resolve, reject) {

			var storageData = localStorage.getItem(localObj);
			var data = JSON.parse(storageData);

			resolve(data);

		});

	}
};

module.exports = localStorageMod;