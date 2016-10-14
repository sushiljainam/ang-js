(function(app) {
	app.AppModule =
		ng.core.NgModule({
			imports: [ ng.platformBrowser.BrowserModule ],
			declarations: [ app.AppComponent, app.loginAppComponent ],
			bootstrap: [ app.AppComponent, app.loginAppComponent ]
		})
		.Class({
			constructor: function() {}
		});
})(window.app || (window.app = {}));