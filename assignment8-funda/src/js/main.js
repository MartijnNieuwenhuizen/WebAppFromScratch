(function() {
	'use strict';
	
	var routes = require('./routes/routes');
	var firstVisitToday = require('./modules/firstVisitToday');

	var app = {
		launcher: function() {

			routes.init();
			firstVisitToday.check();

		}
	}

	// ToDo: 
		// Add id of every watched house to local storage -> change color layout of this houses!
		// Change push message to Google Push Notification if the user has a Android device (optional)

	app.launcher();

})();