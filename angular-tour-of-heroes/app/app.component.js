(function(app) {
	Hero = function(id,name) {
		this.id = id;
		this.name = name;
	}
	app.AppComponent =
		ng.core.Component({
			selector: 'my-app',
			template: `
			  <h1>{{title}}</h1>
			  <h2>My Heroes</h2>
			  <ul class="heroes">
			      <li *ngFor="let hero of heroes"
			        [class.selected]="hero === selectedHero"
			        (click)="onSelect(hero)">
			        <span class="badge">{{hero.id}}</span> {{hero.name}}
			      </li>
			  </ul>
			  <div *ngIf="selectedHero">
			  	<h2>{{selectedHero.name}} details!</h2>
			  	<div><label>id: </label>{{selectedHero.id}}</div>
			  <div>
			    <label>name: </label>
			    <input [(ngModel)]="selectedHero.name" placeholder="name">
			  </div></div>
			  `
		})
		.Class({
			constructor: function() {
			  this.title = 'Tour of Heroes';
			  this.heroes = [ new Hero(1,'Windstrom'), new Hero(2,'Iron Man')];
			  this.selectedHero = '';

			  this.onSelect = function(hero){
			  	this.selectedHero = hero;
			  }
			}
		});
	
		
})(window.app || (window.app = {}));