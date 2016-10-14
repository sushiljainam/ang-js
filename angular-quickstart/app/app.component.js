(function(app) {
	app.AppComponent =
		ng.core.Component({
			selector: 'my-app',
			template: '<h1>My First Angular App</h1>'
		})
		.Class({
			constructor: function() {}
		});
	// create a login component
	app.loginAppComponent =
		ng.core.Component({
			selector: 'login-app',
			template: '<h1>My Login App</h1>'
		})
		.Class({
			constructor: function() {}
		});
})(window.app || (window.app = {}));